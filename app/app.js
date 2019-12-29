import {Render} from './render.js';
import {Game} from './game.js';

const render = new Render('card');
const game = new Game(5);

const redrawEmojis = () => {
    game.updateEmojis();
    render.drawTiles(game.currentEmojis);
};

redrawEmojis();
const gameElement = document.getElementById('game');
gameElement.addEventListener('click', redrawEmojis, false);
