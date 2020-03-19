import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { INotificationsState } from '../state/notification.state';

const notificationsState = (state: IAppState) => state.notifications;

export const selectNotifications = createSelector(
    notificationsState,
    (state: INotificationsState) => state
)

export const selectFriendsNotifications = createSelector(
    notificationsState,
    (state: INotificationsState) => state.friendsNotification
)

export const selectMessageNotifications = createSelector(
    notificationsState,
    (state: INotificationsState) => state.messageNotification
)