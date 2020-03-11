import React from 'react';
import Game from 'src/stores/game';
import ViewState from 'src/stores/view-state';

jest.mock('react');
jest.mock('src/stores/game');
jest.mock('src/stores/view-state');

describe('Creating Stores Context', () => {
    it('should create the stores context', async () => {
        // when
        await import('src/contexts/stores-context');

        // then
        expect(React.createContext).toBeCalledTimes(1);
        expect(Game).toBeCalledTimes(1);
        expect(ViewState).toBeCalledTimes(1);
        expect(React.createContext).toBeCalledWith({
            game: expect.any(Game),
            viewState: expect.any(ViewState)
        });
    });
});
