import { NotificationsActions, ENotificationsActions } from '../actions/notifications.actions';
import { initialNotificationsState, INotificationsState } from '../state/notification.state';

export function notificationsReducers(
  state = initialNotificationsState,
  action: NotificationsActions 
): INotificationsState {
  switch (action.type) {
    case ENotificationsActions.GetNotificationsSuccess: {
      return {
        ...state,
        friendsNotification: action.payload.friendsNotification,
        messageNotification: action.payload.messageNotification
      };
    }
    case ENotificationsActions.DeleteNotification: {      
      const index = state.friendsNotification.findIndex((elem: any) => elem === action.payload);
      state.friendsNotification.splice(index, 1);
      return {
        ...state,
        friendsNotification: state.friendsNotification
      };
    }
    case ENotificationsActions.PostMessageNotification: {    
      const isHaveNotif = state.messageNotification.find((elem: any)=> elem._id === action.payload._id);
      if(isHaveNotif){
        return {
          ...state
        };
      } else {
        return {
          ...state,
          messageNotification: state.messageNotification.concat(action.payload)
        };
      }
    }
    case ENotificationsActions.DeleteMessageNotificationSuccess: {     
      return {
        ...state   
      };
    }
    case ENotificationsActions.DeleteFriendNotificationSuccess: {
      const index = state.friendsNotification.findIndex((elem: any) => elem === action.payload);
      state.friendsNotification.splice(index, 1);
      return {
        ...state,
        friendsNotification: state.friendsNotification
      };
    }
    default:
      return state;
  }
};