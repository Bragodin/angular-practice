import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { INotificationsState } from '../state/notification.state';
import { IUserState } from '../state/user.state';

const userState = (state: IAppState) => state.user;

export const selectUser = createSelector(
    userState,
    (state: IUserState) => state
);
