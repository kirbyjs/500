import React from 'react';
import { random } from 'faker';
import Game from 'src/stores/game';
import { reactInputChangeEvent } from '../factories/react-events';

describe('Game Mobx State', () => {
    let game: Game, event: React.ChangeEvent<HTMLInputElement>;

    beforeEach(() => {
        game = new Game();
        event = reactInputChangeEvent.build();
    });

    it('should set game id', () => {
        const expectedGameId = random.uuid();

        game.setGameId(event);

        // when
        game.setGameId(reactInputChangeEvent.build({ currentTarget: { value: expectedGameId } }));

        // then
        expect(game.id).toBe(expectedGameId);
    });

    it('should default game id to empty string', () => {
        // when
        game.setGameId(reactInputChangeEvent.build({ currentTarget: { value: undefined } }));

        // then
        expect(game.id).toBe('');
    });
});
