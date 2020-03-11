import ReactDOM from 'react-dom';
import React from 'react';
import ReactApp from './app';
import '../sass/main.scss';

export default function initialize(App: typeof ReactApp) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
