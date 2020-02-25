import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IAuthState } from '../state/auth.state';

const authState = (state: IAppState) => state.auth;

export const selectToken = createSelector(
    authState,
    (state: IAuthState) => state.token
);

export const selectId = createSelector(
    authState,
    (state: IAuthState) => state.id
);