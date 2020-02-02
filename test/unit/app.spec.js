import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/app';


describe('<App /> rendering', () => {
    let component;

    beforeEach(() => {
        component = shallow(<App />);
    });

    it('App renders', () => {
        expect(component).toMatchSnapshot();
    });
});
