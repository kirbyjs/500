import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from 'src/app';
import Session, { Props } from 'src/components/session';
import gameFactory from '../factories/game';
import userFactory from '../factories/user';

describe('<Session /> rendering', () => {
    let component: ShallowWrapper<typeof App>,
        props: Props;

    beforeEach(() => {
        const { setGameId, id } = gameFactory.build();
        const { setUsername, name } = userFactory.build();
        props = {
            gameId: id,
            setGameId,
            setUsername,
            username: name
        };
        component = shallow(<Session { ...props }/>);
    });

    it('Session renders', () => {
        expect(component).toMatchSnapshot();
    });
});
