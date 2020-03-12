import { Album } from 'src/app/models/album.model';

export interface IAlbumState {
    albums: Album[]
}

export const initialAlbumState: IAlbumState = {
    albums: [{}] as Album[]
} 
