import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IUserState } from '../state/user.state';
import { IFriendsState } from '../state/friends.state';

const friendsState = (state: IFriendsState) => state;

export const selectFriends = createSelector(
    friendsState,
    (state: IFriendsState) => state.friends
);
