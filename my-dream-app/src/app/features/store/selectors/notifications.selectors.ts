import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { INotificationsState } from '../state/notification.state';

const notificationsState = (state: IAppState) => state.notifications;

export const selectFriendsNotification = createSelector(
    notificationsState,
    (state: INotificationsState) => state.friendsNotification
);
