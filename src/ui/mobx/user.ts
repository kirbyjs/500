import React from 'react';
import { action, observable } from 'mobx';
import ContextualUser from '../../interfaces/user';

export default class User implements ContextualUser {
    @observable name = '';
    @observable cards = [];

    @action setUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.name = event.currentTarget.value || '';
    };
}
