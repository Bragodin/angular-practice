import { NotificationsActions, ENotificationsActions } from '../actions/notifications.actions';
import { initialNotificationsState } from '../state/notification.state';

export function notificationsReducers(
  state = initialNotificationsState,
  action: NotificationsActions 
): any {
  switch (action.type) {
    case ENotificationsActions.GetNotificationsSuccess: {
      return {
        ...state,
        ownerId: action.payload.ownerId,
        friendsNotification: action.payload.friendsNotification,
        messageNotification: action.payload.messageNotification
      };
    }
    default:
      return state;
  }
};