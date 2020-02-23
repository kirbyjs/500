import React from 'react';
import initialize from 'src/initialize';

function FakeApp() {
    return <div />;
}

describe('Initializing the React App', () => {
    test('should render the app with react-dom', () => {
        const root = document.createElement('div');
        root.setAttribute('id', 'root');
        document.body.append(root);

        // when
        initialize(FakeApp as any);

        // then
        expect(root.children.item(0)?.nodeName).toEqual('DIV');
    });
});
