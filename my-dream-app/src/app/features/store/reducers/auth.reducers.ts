import { AuthActions } from '../actions/auth.actions';
import { initialAuthState, IAuthState } from '../state/auth.state';
import { EAuthActions } from '../actions/auth.actions';

export function authReducers(
  state = initialAuthState,
  action: AuthActions
): any {
  switch (action.type) {
    case EAuthActions.GetAuth: {
      return {
        ...state,
        auth: action.payload
      };
    }

    default:
      return state;
  }
};