import React from 'react';
import { action, observable } from 'mobx';
import GameInterface from '../../interfaces/game';
import UserInterface from '../../interfaces/user';
import PhaseTypes from '../../enums/phase-types';
import PlayState from './play-state';
import User from './user';

export default class Game implements GameInterface {
    @observable id = '';
    @observable bids = [];
    @observable contextualUser = new User();
    @observable phase = PhaseTypes.SESSION;
    @observable playState = new PlayState();
    @observable scores: [number, number] = [0, 0];
    @observable teams: [UserInterface[], UserInterface[]] = [[], []];
    @observable winningBidIndex?: number;

    @action setGameId = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.id = event.currentTarget.value || '';
    };
}
