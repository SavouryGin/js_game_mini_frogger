import { Entity } from './entity.js';
import { CANVAS_WIDTH, BLOCK_WIDTH } from '../tools/parameters';
import { getRandomSpeed } from '../tools/functions.js';

export class Pokeball extends Entity {
    constructor(y, speed = getRandomSpeed()) {
        super(-BLOCK_WIDTH, y, '../images/content/pokeball.png');
        this.speed = speed;
    }
    // Обновление положения покебола
    // через фиксированный временной интервал dt
    update(dt, modifier = 0) {
        this.x += this.speed * dt;
        if (this.x > CANVAS_WIDTH) {
            this.x = -BLOCK_WIDTH;
            this.speed = getRandomSpeed();
            // При достижении 50, 100 и т.д. очков
            // скорость покеболов увеличивается и
            // возрастает сложность игры
            if (modifier > 50) {
                this.speed += 50;
            } else if (modifier > 100) {
                this.speed += 100;
            } else if (modifier > 150) {
                this.speed += 150;
            } else if (modifier > 200) {
                this.speed += 200;
            } else if (modifier > 300) {
                this.speed += 300;
            }
        }
    }
}