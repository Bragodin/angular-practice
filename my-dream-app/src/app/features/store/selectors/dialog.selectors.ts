import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IDialogState } from '../state/dialog.state';

const dialogState = (state: IAppState) => state.dialog;

export const selectDialogId = createSelector(
    dialogState,
    (state: IDialogState) => state.id
);

export const selectMessages = createSelector(
    dialogState,
    (state: IDialogState) => state.messages
);
