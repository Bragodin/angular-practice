import { NotificationsActions, ENotificationsActions } from '../actions/notifications.actions';
import { initialNotificationsState, INotificationsState } from '../state/notification.state';
import { User } from 'src/app/models/user.model';

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
      const index = state.friendsNotification.findIndex((elem) => elem === action.payload);
      state.friendsNotification.splice(index, 1);
      return {
        ...state,
        friendsNotification: state.friendsNotification,
        // messageNotification: state.messageNotification
      };
    }
    case ENotificationsActions.PostMessageNotification: {    
      console.log('post message reducer')
      console.log(state)
      console.log(action.payload)
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
        ...state,
        
      };
    }
    default:
      return state;
  }
};