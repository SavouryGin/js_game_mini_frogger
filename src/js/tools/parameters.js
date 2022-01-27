export const BLOCK_WIDTH = 101;      // Ширина картинки-блока
export const BLOCK_HEIGHT = 83;      // Высота картинки-блока
export const NUM_ROWS = 6;           // Изменяя количество столбцов,
export const NUM_COLS = 6;           // можно увеличивать или уменьшать ширину поля
export const CANVAS_WIDTH = BLOCK_WIDTH * NUM_COLS;
export const CANVAS_HEIGHT = 606;    // Высоту холста определяем вручную

// Начальное смещение покемона и покебола по высоте
const POKEMON_Y_OFFSET = 10;                    
const POKEBALL_Y_OFFSET = 20;
// Для рассчёта столкновений покебола и покемона
export const COLLISION_X_OFFSET = 80;
export const COLLISION_Y_OFFSET = 60;
export const POKEMON_BOTTOM_Y_POSITION = BLOCK_HEIGHT * 5 - POKEMON_Y_OFFSET;

// Строки сетки, по которым будут лететь покеболы
export const POKEBALL_LOCATION = [
    BLOCK_HEIGHT - POKEBALL_Y_OFFSET, 
    BLOCK_HEIGHT * 2 - POKEBALL_Y_OFFSET, 
    BLOCK_HEIGHT * 3 - POKEBALL_Y_OFFSET,
    BLOCK_HEIGHT * 4 - POKEBALL_Y_OFFSET
];

// Клавиши управления покемоном
export const ALLOWED_KEYS = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'left',
    68: 'right',
    87: 'up',
    83: 'down',
    'ArrowLeft': 'left',
    'ArrowRight': 'right',
    'ArrowUp': 'up',
    'ArrowDown': 'down',
    'a': 'left',
    'd': 'right',
    'w': 'up',
    's': 'down',
    'ф': 'left',
    'в': 'right',
    'ц': 'up',
    'ы': 'down'
};

// Список картинок для загрузки
export const RESOURCES_LIST = [
    '../images/content/stone.png',
    '../images/content/water.png',
    '../images/content/grass.png',
    '../images/content/pokeball.png',
    '../images/content/pokemon_1.png',
    '../images/content/pokemon_2.png',
    '../images/content/pokemon_3.png',
    '../images/content/pokemon_4.png',
    '../images/content/pokemon_5.png',
    '../images/content/pokemon_6.png',
    '../images/content/pokemon_7.png',
    '../images/content/pokemon_8.png',
    '../images/content/pokemon_9.png',
    '../images/content/pokemon_10.png',
    '../images/content/pokemon_11.png',
    '../images/content/pokemon_12.png',
    '../images/content/pokemon_13.png',
    '../images/content/pokemon_14.png',
    '../images/content/pokemon_15.png',
    '../images/content/pokemon_16.png',
    '../images/content/pokemon_17.png',
    '../images/content/pokemon_18.png',
    '../images/content/pokemon_19.png',
    '../images/content/pokemon_20.png',
    '../images/content/star.png'
];

// Актуальные пути к блокам игрового поля
export const ROW_IMAGES = [
    '../images/content/water.png',   // Верхний ряд - вода
    '../images/content/stone.png',   // Камень
    '../images/content/stone.png',   // Камень
    '../images/content/stone.png',   // Камень
    '../images/content/stone.png',   // Камень
    '../images/content/grass.png'    // Нижний ряд - трава
];