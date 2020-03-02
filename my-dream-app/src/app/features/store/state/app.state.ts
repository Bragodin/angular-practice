import { RouterReducerState } from '@ngrx/router-store';
import { initialAuthState, IAuthState } from './auth.state';
import { INotificationsState, initialNotificationsState } from './notification.state';
import { initialUserState, IUserState } from './user.state';
import { IFriendsState, initialFriendsState } from './friends.state';

export interface IAppState {
    router?: RouterReducerState;
    // auth: IAuthState;
    notifications: INotificationsState;
    user: IUserState;
    friends: IFriendsState;
}

export const initialAppState: IAppState = {
    // auth: initialAuthState,
    notifications: initialNotificationsState,
    user: initialUserState,
    friends: initialFriendsState
}

export function getInitialState(): IAppState {
    return initialAppState;
}