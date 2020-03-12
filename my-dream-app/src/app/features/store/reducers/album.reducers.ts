import { initialAlbumState, IAlbumState } from '../state/album.state';
import { AlbumsActions, EAlbumsActions } from '../actions/albums.actions';


export function albumsReducers(
  state = initialAlbumState,
  action: AlbumsActions
): IAlbumState {
  switch (action.type) {
    case EAlbumsActions.GetAlbumsSuccess: {
      return {
        ...state,
        albums: action.payload
      };
    }
    case EAlbumsActions.DeleteAlbumsSuccess: {
        const index = state.albums.findIndex(elem => {
            return elem._id === action.payload._id
        });
        console.log('index')
        console.log(index)
        state.albums.splice(index, 1);
        return {
          ...state,
          albums: state.albums
        };
      }

    case EAlbumsActions.PostAlbumSuccess: {
        return {
            ...state,
            albums: state.albums.concat(action.payload)
        };
    }
    default:
      return state;
  }
};