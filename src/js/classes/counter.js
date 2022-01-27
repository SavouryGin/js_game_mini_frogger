// Класс для посдчёта игровых очков
export class Counter {
    constructor() {
        // Установить счётчик очков игрока
        this.score = 0;
        // Получить значение рекорда из localStorage
        this.maxScore = parseInt(localStorage.getItem('maxScore')) || 0;
    }

    updateMaxScore() {
        // Проверка на доступность localStorage
        const isStorage = 'undefined' !== typeof localStorage;
        if (this.score > this.maxScore) {
            this.maxScore = this.score;
            // Сохранить рекорд
            isStorage && localStorage.setItem('maxScore', this.maxScore);        
        }
    }

    resetScore() {
        this.score = 0;
    }

    increaseScore(val) {
        this.score += val;
    }

    getScore() {
        return this.score;
    }

    getMaxScore() {
        return this.maxScore;
    }
}