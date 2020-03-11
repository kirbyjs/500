import { Sync } from 'factory.ts';
import ViewState from 'src/stores/view-state';
import { RequestActionTypes } from 'shared/enums/action-types';

const noop = () => undefined;

const viewStateFactory = Sync.makeFactory<ViewState>({
    selectedSessionTab: RequestActionTypes.CREATE_SESSION,
    selectedSessionTabIndex: 0,
    setSelectedSessionTabIndex: noop
});

export default viewStateFactory;
