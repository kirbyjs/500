import React from 'react';
import { Observer } from 'mobx-react-lite';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { RequestActionTypes } from 'shared/enums/action-types';
import useStores from '../hooks/use-stores';

export default function Session() {
    const { game, viewState } = useStores();
    const user = game.contextualUser;

    return (
        <form id='session'>
            <Observer>
                {() => (
                    <>
                        <Tabs
                            value={viewState.selectedSessionTabIndex}
                            indicatorColor='primary'
                            textColor='primary'
                            onChange={viewState.setSelectedSessionTabIndex}
                        >
                            <Tab label='Create'></Tab>
                            <Tab label='Join'></Tab>
                        </Tabs>
                        <div className='form-inputs'>
                            <TextField id='username' label='Name' onChange={user.setUsername} value={user.name} />
                            {viewState.selectedSessionTab === RequestActionTypes.JOIN_SESSION && (
                                <TextField id='gameId' label='Game Id' onChange={game.setGameId} value={game.id} />
                            )}
                        </div>
                    </>
                )}
            </Observer>
            <Button
                id='create-session-button'
                variant='contained'
                type='button'
                color='primary'
                size='large'
                startIcon={<FontAwesomeIcon icon={faGamepad} />}
            >
                Press Start
            </Button>
        </form>
    );
}
