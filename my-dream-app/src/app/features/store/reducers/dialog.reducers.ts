
import { FriendsActions, EFriendsActions } from '../actions/friends.actions';
import { IDialogState, initialDialogState } from '../state/dialog.state';
import { DialogActions, EDialogActions } from '../actions/dialog.actions';

export function dialogReducers(
  state: IDialogState = initialDialogState,
  action: DialogActions
): IDialogState {
  switch (action.type) {
    case EDialogActions.GetMyDialogSuccess: {
      return {
        ...state,
        users: action.payload.users,
        id: action.payload._id,
        messages: action.payload.messages  
      };
    }  
    case EDialogActions.PostDialogSuccess: {
        return {
          ...state,
          users: action.payload.users,
          id: action.payload._id
        };
      }  
    default:
      return state;
  }
};
