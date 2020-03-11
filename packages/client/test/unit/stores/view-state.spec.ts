import React from 'react';
import { random } from 'faker';
import ViewState from 'src/stores/view-state';
import { RequestActionTypes } from 'shared/enums/action-types';
import { reactInputChangeEvent } from '../factories/react-events';

describe('ViewState Mobx State', () => {
    let viewState: ViewState, event: React.ChangeEvent<{}>;

    beforeEach(() => {
        viewState = new ViewState();
        event = reactInputChangeEvent.build();
    });

    it('should set selected session tab index', () => {
        const expectedSelectedSessionTabIndex = random.boolean() ? 0 : 1;

        // when
        viewState.setSelectedSessionTabIndex(reactInputChangeEvent.build(), expectedSelectedSessionTabIndex);

        // then
        expect(viewState.selectedSessionTabIndex).toBe(expectedSelectedSessionTabIndex);
    });

    it('should default and have computed selector to return CREATE_SESSION if tab index is 0', () => {
        const expectedSelectedSessionTabIndex = 0;

        // when
        viewState.setSelectedSessionTabIndex(reactInputChangeEvent.build(), expectedSelectedSessionTabIndex);

        // then
        expect(viewState.selectedSessionTab).toBe(RequestActionTypes.CREATE_SESSION);
    });

    it('should have computed selector to return JOIN_SESSION if tab index is 1', () => {
        const expectedSelectedSessionTabIndex = 1;

        // when
        viewState.setSelectedSessionTabIndex(reactInputChangeEvent.build(), expectedSelectedSessionTabIndex);

        // then
        expect(viewState.selectedSessionTab).toBe(RequestActionTypes.JOIN_SESSION);
    });
});
