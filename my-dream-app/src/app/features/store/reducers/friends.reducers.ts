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
      const index = state.friends.findIndex(elem => elem.friend._id === action.payload);
      state.friends.splice(index, 1);
      return {
        ...state,
        friends: state.friends
      };
    }  
    case EFriendsActions.PostFriendSuccess: {
      return {
        ...state,
        ...state.friends.push({friend: action.payload})
      };
    }  
    default:
      return state;
  }
};
