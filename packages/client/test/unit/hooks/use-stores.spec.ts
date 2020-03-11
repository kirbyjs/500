import React from 'react';
import storesContext from 'src/contexts/stores-context';
import useStores from 'src/hooks/use-stores';

jest.mock('react');

describe('Use Stores React Hook', () => {
    it('should use the useContext react hook', () => {
        // when
        useStores();

        // then
        expect(React.useContext).toBeCalledTimes(1);
        expect(React.useContext).toBeCalledWith(storesContext);
    });
});
