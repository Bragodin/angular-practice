import { RouterReducerState } from '@ngrx/router-store';
import { initialAuthState, IAuthState } from './auth.state';
import { INotificationsState, initialNotificationsState } from './notification.state';
import { initialUserState, IUserState } from './user.state';

export interface IAppState {
    router?: RouterReducerState;
    auth: IAuthState;
    notifications: INotificationsState;
    user: IUserState;
}

export const initialAppState: IAppState = {
    auth: initialAuthState,
    notifications: initialNotificationsState,
    user: initialUserState
}

export function getInitialState(): IAppState {
    return initialAppState;
}