import React from 'react';
import Game from '../stores/game';
import ViewState from '../stores/view-state';

export default React.createContext({
    game: new Game(),
    viewState: new ViewState()
});
