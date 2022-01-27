/* Модуль для загрузки изображений. 
 * Упрощает процесс загрузки файлов игры.
 * Содержит простой кэш-слой, который позволяет
 * переиспользовать сохранённые изображения  
 * при повторном обращении к ним */

(function () {
    // Кэш файлов
    let resourceCache = {};
    // Стек функций
    let readyCallbacks = [];

    // Функция общего доступа к загрузке. Вызывает соответствующую
    // приватную функцию. Вход - массив строк-путей к файлам изображений или 
    // единственный url-путь к изображению.
    function load(urlOrArr) {
        if (urlOrArr instanceof Array) {
            // Если передан массив, пройтись по всем ссылкам
            urlOrArr.forEach(function (url) {
                _load(url);
            });
        } else {
            // Иначе - загрузить файл по ссылке
            _load(urlOrArr);
        }
    }

    // Скрытая функция загрузки, берёт данные из кэша
    function _load(url) {
        
        if (resourceCache[url]) {
            // Если файл по этой ссылке уже сохранён в кэше, достать его
            return resourceCache[url];
        } else {
            // Иначе - загрузи новый файл
            let img = new Image();
            img.onload = function () {
                // Добавить 
                resourceCache[url] = img;
                // Когда файл загружен и закэширован, вызвать onReady(),
                // которая вызовет все функции сохранённые в стеке readyCallbacks
                if (isReady()) {
                    readyCallbacks.forEach(function (func) {
                        func();
                    });
                }
            };
            // Инициализировать кэш значением false, оно изменится,
            // когда будет вызван обработчик события загрузки изображения
            resourceCache[url] = false;
            // Дать изображению атрибут src
            img.src = url;
        }
    }

    // Вспомогательная функция получения уже загруженного изображения из кэша
    function get(url) {
        return resourceCache[url];
    }

    // Проверка окончания загрузки изображения
    function isReady() {
        let ready = true;
        for (let k in resourceCache) {
            if (resourceCache.hasOwnProperty(k) &&
                !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    // Добавть функцию в стек, она будет вызвана, когда
    // все изображения будут окончательно загружены
    function onReady(func) {
        readyCallbacks.push(func);
    }

    // Создать глобальный объект Resources 
    // c полями, обеспечивающими доступ к функциям
    window.Resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();