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
    case EAlbumsActions.PostPhotosSuccess: {
      const index = state.albums.findIndex((elem) => elem._id === action.payload[0].albumId);
      const newPhotos = state.albums[index].photosName.concat(action.payload);
      state.albums[index].photosName = newPhotos;
      return {
          ...state,
          ...state
      };
    }
    // case EAlbumsActions.UpdateAlbumSuccess: {
    //   console.log('update reducer succ3es')
    //   console.log(action.payload)
    //   return {
    //       ...state,
          
    //   };
    // }
    case EAlbumsActions.DeletePhotosSuccess: {
      console.log('it"s ok ')
      console.log(action.payload)
      console.log(state)
      return {
          ...state,
        
      };
    }
    default:
      return state;
  }
};