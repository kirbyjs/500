import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App, { Props } from 'src/app';
import gameFactory from './factories/game';

describe('<App /> rendering', () => {
    let component: ShallowWrapper<typeof App>,
        props: Props;

    beforeEach(() => {
        props = {
            game: gameFactory.build()
        };
        component = shallow(<App { ...props }/>);
    });

    it('App renders', () => {
        expect(component).toMatchSnapshot();
    });
});
