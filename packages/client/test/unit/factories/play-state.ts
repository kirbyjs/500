import { Sync } from 'factory.ts';
import PlayState from 'src/mobx/play-state';

const playStateFactory = Sync.makeFactory<PlayState>({
    allCardsPlayed: [],
    numberOfTricksWonByTeam: [0, 0],
    cardsInTrick: []
});

export default playStateFactory;
