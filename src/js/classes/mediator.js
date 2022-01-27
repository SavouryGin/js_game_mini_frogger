import { COLLISION_X_OFFSET, COLLISION_Y_OFFSET, CANVAS_WIDTH, BLOCK_WIDTH, BLOCK_HEIGHT } from '../tools/parameters.js';
import { soundPlayer } from '../tools/soundPlayer.js';

// Шаблон посредник
export class Mediator {
    // Все игровые классы взаимодействуют через посредника
    constructor(pokeballs, pokemon, star, counter, displayer) {
        this._pokeballs = pokeballs;
        this._pokemon = pokemon;
        this._star = star;
        this._counter = counter;
        this._displayer = displayer;
    }

    // Проверка на столкновение покемона и покебола
    checkCollisions() {
        this._pokeballs.forEach(element => {
            if (element.x + COLLISION_X_OFFSET > this._pokemon.x &&
                element.x - COLLISION_X_OFFSET < this._pokemon.x &&
                element.y + COLLISION_Y_OFFSET > this._pokemon.y &&
                element.y - COLLISION_Y_OFFSET < this._pokemon.y) {
                    this._pokemon.resetPosition();
                    this._pokemon.setRandomSkin();
                    soundPlayer.failure.play();
                    this._counter.updateMaxScore();
                    this._counter.resetScore();
                    this._displayer.updateScore(this._counter.getScore(), this._counter.getMaxScore());
            }
        });
    }

    // Проверка на подбирание звездочки
    checkCollect() {
        if (this._star.x + COLLISION_X_OFFSET > this._pokemon.x &&
            this._star.x - COLLISION_X_OFFSET < this._pokemon.x &&
            this._star.y + COLLISION_Y_OFFSET > this._pokemon.y &&
            this._star.y - COLLISION_Y_OFFSET < this._pokemon.y) {
                this._star.changePosition();
                soundPlayer.collect.play();
                this._counter.increaseScore(3);
                this._displayer.updateScore(this._counter.getScore(), this._counter.getMaxScore());
        }
    }

    // Управление покемоном через клавиатуру (left, right, up, down)
    handleInput(key) {
        // Если покемон достиг воды, то ничего не делать
        // setTimeout обновит покемона через 600 ms
        if (this._pokemon.y < 0) { 
            return;
        }
        // Иначе - перемещать покемона по полю
        switch (key) {
            case 'left':
                this._pokemon.x > 0 ? this._pokemon.x -= BLOCK_WIDTH : this._pokemon.x -= 0;
                soundPlayer.jump.play();
                break;
            case 'right':
                this._pokemon.x < CANVAS_WIDTH - BLOCK_WIDTH ? this._pokemon.x += BLOCK_WIDTH : this._pokemon.x += 0;
                soundPlayer.jump.play();
                break;
            case 'up':
                this._pokemon.y > 0 ? this._pokemon.y -= BLOCK_HEIGHT : this._pokemon.y -= 0;
                soundPlayer.jump.play();
                break;
            case 'down':
                this._pokemon.y < BLOCK_HEIGHT * 5 - 10 ? this._pokemon.y += BLOCK_HEIGHT : this._pokemon.y += 0;
                soundPlayer.jump.play();
                break;
        }
        if (this._pokemon.y < 0) {
            setTimeout(() => {
                this._pokemon.resetPosition();
                this._pokemon.setRandomSkin();
                this._counter.increaseScore(1);
                soundPlayer.success.play();
                this._counter.updateMaxScore();
                this._displayer.updateScore(this._counter.getScore(), this._counter.getMaxScore());
            }, 600);
        }
    }

    getModifier() {
        return this._counter.getScore();
    }
}