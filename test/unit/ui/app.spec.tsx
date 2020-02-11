import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from '../../../src/ui/app';

describe('<App /> rendering', () => {
    let component: ShallowWrapper<React.FunctionComponent>;

    beforeEach(() => {
        component = shallow(<App />);
    });

    it('App renders', () => {
        expect(component).toMatchSnapshot();
    });
});
