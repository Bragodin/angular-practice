import { RouterReducerState } from '@ngrx/router-store';
import { INotificationsState, initialNotificationsState } from './notification.state';
import { initialUserState, IUserState } from './user.state';
import { IFriendsState, initialFriendsState } from './friends.state';
import { IDialogState, initialDialogState } from './dialog.state';
import { IPaginationState, initialPaginationState } from './pagination.state';
import { IAlbumState, initialAlbumState } from './album.state';
import { IErrorsState, initialErrorsState } from './errors.state';

export interface IAppState {
    router?: RouterReducerState;
    // auth: IAuthState;
    notifications: INotificationsState;
    user: IUserState;
    friends: IFriendsState;
    dialog: IDialogState;
    pagination: IPaginationState;
    albums: IAlbumState;
    errors: IErrorsState;
}

export const initialAppState: IAppState = {
    // auth: initialAuthState,
    notifications: initialNotificationsState,
    user: initialUserState,
    friends: initialFriendsState,
    dialog: initialDialogState,
    pagination: initialPaginationState,
    albums: initialAlbumState,
    errors: initialErrorsState
}

export function getInitialState(): IAppState {
    return initialAppState;
}