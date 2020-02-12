import ReactDOM from 'react-dom';
import React from 'react';
import '../sass/main.scss';

export default function initialize(App: React.FunctionComponent) {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}
