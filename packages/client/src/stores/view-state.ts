import { observable, action, computed } from 'mobx';
import { RequestActionTypes } from 'shared/enums/action-types';
import { ChangeEvent } from 'react';

type selectedSessionTabIndexType = 0 | 1;
type selectedSessionTabType = RequestActionTypes.CREATE_SESSION | RequestActionTypes.JOIN_SESSION;

class ViewState {
    @observable selectedSessionTabIndex: selectedSessionTabIndexType = 0;

    @action setSelectedSessionTabIndex = (event: ChangeEvent<{}>, selectedIndex: selectedSessionTabIndexType) => {
        this.selectedSessionTabIndex = selectedIndex;
    };

    @computed get selectedSessionTab(): selectedSessionTabType {
        if (this.selectedSessionTabIndex === 1) {
            return RequestActionTypes.JOIN_SESSION;
        }

        return RequestActionTypes.CREATE_SESSION;
    }
}

export default ViewState;
