import { Sync } from 'factory.ts';
import React from 'react';
import { random } from 'faker';

export const reactInputChangeEvent = Sync.makeFactory<React.ChangeEvent<HTMLInputElement>>({
    currentTarget: {
        value: random.word()
    }
} as React.ChangeEvent<HTMLInputElement>);
