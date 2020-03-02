import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IUserState } from '../state/user.state';

const userState = (state: IAppState) => state.user;

export const selectUser = createSelector(
    userState,
    (state: IUserState) => state.activeUser
);

export const selectUsers = createSelector(
    userState,
    (state: IUserState) => state.users
);

export const autorithationUsers = createSelector(
    userState,
    (state: IUserState) => state.autorizationUser
);

export const selectPostUser = createSelector(
    userState,
    (state: IUserState) => state.autorizationUser
);

export const selectLogout = createSelector(
    userState,
    (state: IUserState) => state
);

export const selectLogin = createSelector(
    userState,
    (state: IUserState) => state.autorizationUser
);