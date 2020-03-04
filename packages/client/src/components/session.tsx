import React from 'react';
import { observer } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import Game from '../mobx/game';
import User from '../mobx/user';

export interface Props {
    gameId: Game['id'];
    setGameId: Game['setGameId'];
    setUsername: User['setUsername'];
    username: User['name'];
}

@observer
class Session extends React.Component<Props> {
    render() {
        return (
            <form id='session'>
                <div className='form-inputs'>
                    <TextField
                        id='username'
                        label='Name'
                        onChange={ this.props.setUsername }
                        value={ this.props.username }
                    />
                    <TextField
                        id='gameId'
                        label='Game Id'
                        onChange={ this.props.setGameId }
                        value={ this.props.gameId }
                    />
                </div>
                <Button
                    id='create-session-button'
                    variant='contained'
                    type='button'
                    color='primary'
                    size='large'
                    startIcon={ <FontAwesomeIcon icon={ faGamepad }/> }
                >
                    Press Start
                </Button>
            </form>
        );
    }
}

export default Session;
