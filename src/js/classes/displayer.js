// Класс для отображения очков на странице
// (работает с DOM)
export class Displayer {
    constructor(scoreDisplayId = 'score', maxScoreDisplayId = 'max-score') {
        // Текущий счет
        this.scoreDisplay = document.getElementById(scoreDisplayId);
        // Рекорд
        this.maxScoreDisplay = document.getElementById(maxScoreDisplayId);
    }

    setScore(score, maxScore) {
        this.scoreDisplay.innerText = score;
        this.maxScoreDisplay.innerText = maxScore;
    }

    updateScore(score, maxScore) {
        this.scoreDisplay.innerText = score;
        this.maxScoreDisplay.innerText = maxScore;
    }
}
