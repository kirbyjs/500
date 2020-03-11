import { Sync } from 'factory.ts';
import Game from 'src/stores/game';
import PhaseTypes from 'shared/enums/phase-types';
import userFactory from './user';
import playStateFactory from './play-state';

const noop = () => undefined;

const gameFactory = Sync.makeFactory<Game>({
    id: 'game-id',
    bids: [],
    contextualUser: userFactory.build(),
    phase: PhaseTypes.SESSION,
    playState: playStateFactory.build(),
    scores: [0, 0],
    teams: [[], []],
    setGameId: noop
});

export default gameFactory;
