import { observable } from 'mobx';
import PlayStateInterface from '../../interfaces/play-state';

export default class PlayState implements PlayStateInterface {
    @observable allCardsPlayed = [];
    @observable cardsInTrick = [];
    @observable numberOfTricksWonByTeam: [number, number] = [0, 0];
}
