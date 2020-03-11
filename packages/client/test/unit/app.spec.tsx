import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from 'src/app';

describe('<App />', () => {
    let component: ShallowWrapper<typeof App>;

    beforeEach(() => {
        component = shallow(<App />);
    });

    it('should render component', () => {
        expect(component).toMatchSnapshot();
    });
});
