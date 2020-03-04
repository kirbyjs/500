import React from 'react';
import { observer } from 'mobx-react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Game from './mobx/game';
import Session from './components/session';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: red[900]
        }
    }
});

export interface Props {
    game: Game;
}

@observer
class App extends React.Component<Props> {
    render() {
        return (
            <ThemeProvider theme={ theme }>
                <Session
                    gameId={ this.props.game.id }
                    setGameId={ this.props.game.setGameId }
                    setUsername={ this.props.game.contextualUser.setUsername }
                    username={ this.props.game.contextualUser.name }
                />
            </ThemeProvider>
        );
    }
}

export default App;
