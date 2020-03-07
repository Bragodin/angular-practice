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
    case EFriendsActions.DeleteFriendSuccess: {
      const userFiltered = state.friends.filter(elem => elem.friend._id !== action.payload);
      console.log(action.payload)
      console.log(userFiltered)
      return {
        ...state,
        friends: userFiltered
      };
    }  
    default:
      return state;
  }
};
