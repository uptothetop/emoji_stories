import {EMOJIS} from './emojis_list.js';

export class Game {
    constructor(emojisNumber = 5) {
        this.emojis = EMOJIS;
        this.len = this.emojis.length;

        this.emojisNumber = emojisNumber;
        this.curentEmojis = [];
    }

    /** Returns random emoji from the list. */
    getRandomEmoji() {
        const sampleIndex = Math.floor(Math.random() * this.len);
        return this.emojis[sampleIndex];
    }

    /** Updates this.currentEmojis with current emojisNumber */
    updateEmojis() {
        this.currentEmojis = [];
        for (let i = 0; i < this.emojisNumber; i++) {
            this.currentEmojis.push(this.getRandomEmoji());
        }
    }
}