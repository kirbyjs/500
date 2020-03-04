import ReactDOM from 'react-dom';
import React from 'react';
import Game from './mobx/game';
import ReactApp from './app';
import '../sass/main.scss';

const game = new Game();

export default function initialize(App: typeof ReactApp) {
    ReactDOM.render(
        <App game={game} />,
        document.getElementById('root')
    );
}
