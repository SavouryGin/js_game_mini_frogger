import { Entity } from './entity.js';
import { getRndInteger } from '../tools/functions.js';
import { BLOCK_WIDTH, BLOCK_HEIGHT, POKEMON_BOTTOM_Y_POSITION, NUM_ROWS } from '../tools/parameters.js';

export class Star extends Entity {
    // Звездочка появляется в случайной клетке с 3 по 5 ряд
    constructor(
        x = BLOCK_WIDTH * getRndInteger(0, NUM_ROWS - 1), 
        y = POKEMON_BOTTOM_Y_POSITION - BLOCK_HEIGHT * getRndInteger(2, NUM_ROWS - 2)) {
        super(x, y, '../images/content/star.png'); 
    }
    // При подбирании здёздочки она перемещается в случайную позицию
    changePosition() {
        this.x = BLOCK_WIDTH * getRndInteger(0, NUM_ROWS - 1);
        this.y = POKEMON_BOTTOM_Y_POSITION - BLOCK_HEIGHT * getRndInteger(2, NUM_ROWS - 2);
    }
}