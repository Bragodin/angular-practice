import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IAlbumState } from '../state/album.state';

const albumState = (state: IAppState) => state.albums;

export const selectAlbums = createSelector(
    albumState,
    (state: IAlbumState) => state.albums
);