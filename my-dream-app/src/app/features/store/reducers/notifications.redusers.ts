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
        ...action.payload
      };
    }
    default:
      return state;
  }
};