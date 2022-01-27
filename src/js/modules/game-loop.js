import { 
    POKEBALL_LOCATION, CANVAS_WIDTH, CANVAS_HEIGHT, ALLOWED_KEYS,
    NUM_ROWS, NUM_COLS, BLOCK_WIDTH, BLOCK_HEIGHT, RESOURCES_LIST, ROW_IMAGES
} from '../tools/parameters.js';
import { Factory } from '../classes/factory.js';
import { Mediator } from '../classes/mediator.js';
import { togglePause } from '../tools/functions.js';

// Инициализация объектов
let paused = false;
const factory = new Factory();
const pokemon = factory.create('Pokemon');
const star =  factory.create('Star');
const counter = factory.create('Counter');
const displayer = factory.create('Displayer');
const allPokeballs = [];
POKEBALL_LOCATION.forEach(function (locationY) {
    const pokeball = factory.create('Pokeball', locationY);
    allPokeballs.push(pokeball);
});
// Передаем в посредник все созданные объекты
// В нём будет производиться рассчёт коллизий и очков
const mediator = new Mediator(allPokeballs, pokemon, star, counter, displayer);

// Отображаем первоначальные значения очков
displayer.setScore(counter.getScore(), counter.getMaxScore());
 
// Добавляем обработчик нажатий на клавиши управления покемоном
document.addEventListener('keyup', function(e) {
    // event.key соответствует современной спецификации JS,
    // а event.keyCode поддерживается в старых браузерах
    let k = e.key || e.keyCode;
    mediator.handleInput(ALLOWED_KEYS[k]);
});

// Добавляем обработчик нажания на пробел (паузу)
document.addEventListener('keydown', function (e) {
    let k = e.key || e.keyCode;
    if (k === ' ' || k === 32)
    {
        paused = togglePause(paused);
    }
});

/* Самовызывающаяся функция, которая запускает игровой цикл 
 * (обновляет сущности и отрисовывает их), создает игровое поле
 * и обновляет состояния объектов (покемона и покеболов).
 * Функция работает, отрисовывая игровое поле снова и снова при каждом
 * передвижении покемона. Также функция создает canvas-контекст (ctx)
 * как глобальный объект. */
(function() {
    // Добавить 2D-canvas в DOM
    let container = document.getElementById('game-container');
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    container.appendChild(canvas);
    let lastTime;
    
    // Отправная точка игрового цикла, обрабатывает вызовы
    // методов update и render
    function main() {
        // Расчитать интервал времени dt для плавной анимации
        let now = Date.now();
        let dt = (now - lastTime) / 1000.0;
        // Вызывать update/render функции через интервал dt,
        // если игра не на паузе
        if (!paused) {
            update(dt);
            render();
        }        
        // Установить переменную lastTime, которая используется для определения
        // промежутка времени, через который эта main будет снова вызвана
        lastTime = now;
        // Использовать метод браузера requestAnimationFrame для вызова функции
        // main как только браузер будет способен отрисовать ещё один фрейм
        window.requestAnimationFrame(main);        
    }

    // Установить начальные настройки
    function init() {
        lastTime = Date.now();
        main();
    }

    function update(dt) {
        updateEntities(dt);
        mediator.checkCollisions();
        mediator.checkCollect();
    }

    function updateEntities(dt) {
        allPokeballs.forEach(function (pokeball) {
            pokeball.update(dt, mediator.getModifier());
        });
    }

    // Функция отрисовки одного состояния игры. Она вызывается
    // через каждый тик игрового цикла, создаваю смену кадров
    function render() {
        // Перед отрисовкой очистить холст
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let row; 
        let col;
        // Циклом по числу строк и столбцов отрисовать изображение 
        // соответствующее данной части сетки игрового поля
        for (row = 0; row < NUM_ROWS; row++) {
            for (col = 0; col < NUM_COLS; col++) {
                // Функция drawImage холста принимает три параметра:
                // изображение, x-координату и y-координату для старта отрисовки
                // Используем модуль Resources для быстрого доступа к кэшу картинок
                ctx.drawImage(Resources.get(ROW_IMAGES[row]), col * BLOCK_WIDTH, row * BLOCK_HEIGHT);
            }
        }
        renderEntities();
    }

    // Функция вызывается через render() и отрисовывает игровые объекты
    function renderEntities() {
        // Отрисовать покеболы
        allPokeballs.forEach(function (pokeball) {
            pokeball.render();
        });
        // Отрисовать покемона
        pokemon.render();
        star.render();
    }

    // Загрузка всех ресурсов игры через модуль
    Resources.load(RESOURCES_LIST);
    // Инициализация игры
    Resources.onReady(init);

    // Сделать контекст холста глобальной переменной для
    // обращения к нему из других js файлов
    window.ctx = ctx;
})(this);
