import PhaseTypes from '../enums/phase-types';
import User, { ContextualUser } from './user';
import PlayState from './play-state';
import Bid from './bid';

interface Game {
    id: string;
    bids: Bid[];
    contextualUser: ContextualUser;
    phase: PhaseTypes;
    playState: PlayState;
    scores: [number, number];
    teams: [User[], User[]];
    winningBidIndex?: number;
}

export default Game;
