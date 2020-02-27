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
        _id: action.payload._id,
        name: action.payload.name,
        surname: action.payload.surname,
        phone: action.payload.phone,
        login: action.payload.login,
        tokens: action.payload.tokens
      };
    }
    default:
      return state;
  }
};