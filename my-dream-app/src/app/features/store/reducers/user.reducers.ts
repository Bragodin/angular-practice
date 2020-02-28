import { initialUserState, IUserState } from '../state/user.state';
import { UserActions, EUserActions } from '../actions/user.actions';
import { IAppState } from '../state/app.state';

export function userReducers(
  state: IUserState = initialUserState,
  action: UserActions
): IUserState {
  switch (action.type) {
    case EUserActions.GetMyUserSuccess: {
      return {
        ...state,
        activeUser: action.payload
      };
    }  
    case EUserActions.UpdateAvatar: {
      const updatedUser = state.activeUser;
      updatedUser.avatar = action.payload; 
      return {
        ...state,
        activeUser: updatedUser
      }
    }
    case EUserActions.GetAutorizationUserSuccess: {
      return {
        ...state,
        autorizationUser: action.payload
      }
    }
    case EUserActions.GetMyUsersSuccess: {
      return {
        ...state,
        users: action.payload
      }
    }
    // case EUserActions.GetUserSuccess: {
    //   return {
    //     ...state,
    //     ...state
    //   }
    // }
    // case EUserActions.GetMyUserFailure: {
    //   return {
    //     ...state,
    //     activeUser: null
    //   }
    // }
    case EUserActions.PostUserSuccess: {
      return {
        ...state,
        activeUser: null
      }
    } 

    //Из-за этого говна не подгружает activeUser
    default:
      return state;
  }
};