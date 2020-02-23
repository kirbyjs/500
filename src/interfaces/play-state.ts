import { Card } from './card';

interface PlayState {
    allCardsPlayed: Card[];
    cardsInTrick: Card[];
    numberOfTricksWonByTeam: [number, number];
}

export default PlayState;
