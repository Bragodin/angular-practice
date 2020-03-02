import { initialUserState, IUserState } from '../state/user.state';
import { UserActions, EUserActions } from '../actions/user.actions';

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
    case EUserActions.GetMyUserFailure: {
      return {
        ...state,
        activeUser: null
      }
    }
    case EUserActions.PostUserSuccess: {
      return {
        ...state,
        activeUser: action.payload,
        autorizationUser: action.payload
      }
    } 

    case EUserActions.LogoutUserSuccess: {
      return {
        ...state,    
        users: null,
        activeUser: null,
        autorizationUser: null
      }
    }
    case EUserActions.LoginUserSuccess: {
      return {
        ...state,    
        activeUser: action.payload,
        autorizationUser: action.payload
      }
    } 
    default:
      return state;
  }
};
