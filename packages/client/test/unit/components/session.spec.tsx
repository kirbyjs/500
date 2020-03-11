import { TextField } from '@material-ui/core';
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { random, name } from 'faker';
import App from 'src/app';
import Session from 'src/components/session';
import useStores from 'src/hooks/use-stores';
import { RequestActionTypes } from 'shared/enums/action-types';
import gameFactory from '../factories/game';
import viewStateFactory from '../factories/view-state';
import userFactory from '../factories/user';

jest.mock('src/hooks/use-stores');
const useStoresMock = useStores as jest.Mock;

describe('<Session />', () => {
    let component: ShallowWrapper<typeof App>;

    beforeEach(() => {
        const game = gameFactory.build();
        const viewState = viewStateFactory.build();

        useStoresMock.mockReturnValue({ game, viewState });
        component = shallow(<Session />);
    });

    it('should render Session', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render form elements', () => {
        expect(component.childAt(0).dive()).toMatchSnapshot();
    });

    it('should use the hook useStores and pass required session state', () => {
        const game = gameFactory.build({
            contextualUser: userFactory.build({
                name: name.firstName()
            })
        });
        const viewState = viewStateFactory.build({
            selectedSessionTabIndex: random.boolean() ? 0 : 1
        });

        useStoresMock.mockReturnValue({ game, viewState });

        // when
        component = shallow(<Session />);
        const reactFragmentComponent = component.childAt(0).dive();
        const tabsComponent = reactFragmentComponent.childAt(0);
        const userTextField = reactFragmentComponent.childAt(1).childAt(0);

        // then
        expect(tabsComponent.prop('value')).toBe(viewState.selectedSessionTabIndex);
        expect(tabsComponent.prop('onChange')).toBe(viewState.setSelectedSessionTabIndex);

        expect(userTextField.prop('value')).toBe(game.contextualUser.name);
        expect(userTextField.prop('onChange')).toBe(game.contextualUser.setUsername);
    });

    it('should render the game id text input field if join session tab is selected', () => {
        const game = gameFactory.build({
            id: random.uuid()
        });
        const viewState = viewStateFactory.build({
            selectedSessionTab: RequestActionTypes.JOIN_SESSION
        });

        useStoresMock.mockReturnValue({ game, viewState });

        // when
        component = shallow(<Session />);
        const reactFragmentComponent = component.childAt(0).dive();
        const gameIdTextField = reactFragmentComponent.childAt(1).childAt(1);

        // then
        expect(gameIdTextField.type()).toBe(TextField);
        expect(gameIdTextField.props()).toStrictEqual({
            id: 'gameId',
            label: 'Game Id',
            onChange: game.setGameId,
            value: game.id
        });
    });
});
