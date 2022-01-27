import { Entity } from './entity.js';
import { BLOCK_WIDTH, POKEMON_BOTTOM_Y_POSITION } from '../tools/parameters.js';
import { getRndInteger } from '../tools/functions.js';

export class Pokemon extends Entity {
    constructor(x = BLOCK_WIDTH * 2, y = POKEMON_BOTTOM_Y_POSITION) {
        // Изображение покемона по умолчанию
        super(x, y, '../images/content/pokemon_1.png'); 
    }

    // Вернуть на стартовую позицию
    resetPosition() {
        this.x = BLOCK_WIDTH * 2;
        this.y = POKEMON_BOTTOM_Y_POSITION;
    }

    // Выбрать случайное изображение для покемона
    setRandomSkin() {
        const random = getRndInteger(1, 20);
        switch (random) {
            case 1:
                this.sprite = '../images/content/pokemon_1.png';
                break;
            case 2:
                this.sprite = '../images/content/pokemon_2.png';
                break;
            case 3:
                this.sprite = '../images/content/pokemon_3.png';
                break;
            case 4:
                this.sprite = '../images/content/pokemon_4.png';
                break;
            case 5:
                this.sprite = '../images/content/pokemon_5.png';
                break;
            case 6:
                this.sprite = '../images/content/pokemon_6.png';
                break;
            case 7:
                this.sprite = '../images/content/pokemon_7.png';
                break;
            case 8:
                this.sprite = '../images/content/pokemon_8.png';
                break;
            case 9:
                this.sprite = '../images/content/pokemon_9.png';
                break;
            case 10:
                this.sprite = '../images/content/pokemon_10.png';
                break;
            case 11:
                this.sprite = '../images/content/pokemon_11.png';
                break;
            case 12:
                this.sprite = '../images/content/pokemon_12.png';
                break;
            case 13:
                this.sprite = '../images/content/pokemon_13.png';
                break;
            case 14:
                this.sprite = '../images/content/pokemon_14.png';
                break;
            case 15:
                this.sprite = '../images/content/pokemon_15.png';
                break;
            case 16:
                this.sprite = '../images/content/pokemon_16.png';
                break;
            case 17:
                this.sprite = '../images/content/pokemon_17.png';
                break;
            case 18:
                this.sprite = '../images/content/pokemon_18.png';
                break;
            case 19:
                this.sprite = '../images/content/pokemon_19.png';
                break;
            case 20:
                this.sprite = '../images/content/pokemon_20.png';
                break;
        }
    }
}