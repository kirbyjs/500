import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../src/app';

test('App renders', () => {
    const component = renderer.create(<App />);

    expect(component.toJSON()).toMatchSnapshot();
});
