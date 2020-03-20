import { IAppState } from '../state/app.state';
import { IErrorsState } from '../state/errors.state';
import { createSelector } from '@ngrx/store';

const errorsState = (state: IAppState) => state.errors;

export const selectErrors = createSelector(
    errorsState,
    (state: IErrorsState) => state.errors
);