import { Pokeball } from './pokeball.js';
import { Pokemon } from './pokemon.js';
import { Star } from './star.js';
import { Counter } from './counter.js';
import { Displayer } from './displayer.js'

// Шаблон фабрика
export class Factory {
    create (type, y) {
        let gameObject;
        if (type === 'Pokemon') {
            gameObject = new Pokemon();
        } else if (type === 'Pokeball') {
            gameObject = new Pokeball(y);
        } else if (type === 'Star') {
            gameObject = new Star();
        } else if (type === 'Counter') {
            gameObject = new Counter();
        } else if (type === 'Displayer') {
            gameObject = new Displayer();
        }
        gameObject.type = type;
        return gameObject;
    }
}