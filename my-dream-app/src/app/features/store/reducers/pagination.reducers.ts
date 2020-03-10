import { initialPaginationState, IPaginationState } from '../state/pagination.state';
import { PaginationsActions, EPaginationsActions } from '../actions/pagination.actions';

export function paginationReducers(
  state = initialPaginationState,
  action: PaginationsActions
): IPaginationState {
  switch (action.type) {
    case EPaginationsActions.PostPage: {
      return {
        ...state,
        usersPage: action.payload
      };
    }
    default:
      return state;
  }
};