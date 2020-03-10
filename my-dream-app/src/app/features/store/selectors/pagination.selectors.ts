import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IPaginationState } from '../state/pagination.state';

const paginationState = (state: IAppState) => state.pagination;

export const selectUserPage = createSelector(
    paginationState,
    (state: IPaginationState) => state.usersPage
)