import { initialUserState, IUserState } from '../state/user.state';
import { UserActions, EUserActions } from '../actions/user.actions';
import { IFriendsState, initialFriendsState } from '../state/friends.state';
import { FriendsActions, EFriendsActions } from '../actions/friends.actions';

export function friendsReducers(
  state: IFriendsState = initialFriendsState,
  action: FriendsActions
): IFriendsState {
  switch (action.type) {
    case EFriendsActions.GetMyFriendsSuccess: {
      return {
        ...state,
        friends: action.payload
      };
    }  
    default:
      return state;
  }
};
