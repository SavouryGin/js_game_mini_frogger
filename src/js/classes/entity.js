// Общий класс-родитель
export class Entity {
    // Конструктор объекта
    // x и y - положение на холсте
    // sprite - выбранное изображение
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
    }
    // Отрисовка объекта на холсте
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}