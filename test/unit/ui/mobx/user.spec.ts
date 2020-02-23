import React from 'react';
import { name } from 'faker';
import User from 'src/ui/mobx/user';
import { reactInputChangeEvent } from '../factories/react-events';

describe('User Mobx State', () => {
    let user: User,
        event: React.ChangeEvent<HTMLInputElement>;

    beforeEach(() => {
        user = new User();
        event = reactInputChangeEvent.build();
    });

    it('should set username', () => {
        const expectedUsername = name.firstName();

        user.setUsername(event);

        // when
        user.setUsername(reactInputChangeEvent.build({ currentTarget: { value: expectedUsername } }));

        // then
        expect(user.name).toBe(expectedUsername);
    });
});
