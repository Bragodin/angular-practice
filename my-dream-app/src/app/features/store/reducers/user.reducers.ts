import { initialUserState } from '../state/user.state';
import { UserActions, EUserActions } from '../actions/user.actions';

export function userReducers(
  state = initialUserState,
  action: UserActions
): any {
  switch (action.type) {
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state;
  }
};