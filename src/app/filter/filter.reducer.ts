import * as fromFilter from './filter.action';

const initialState: fromFilter.allowedFilters = 'all';

export function filterReducer(state = initialState, action: fromFilter.FilterActions): fromFilter.allowedFilters {

    switch (action.type) {

        case fromFilter.SET_FILTER:
            return action.filter;
            break;

        default:
            return state;

    }

}
