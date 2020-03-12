export interface IAlbumState {
    name: string;
    userId: string;
    photos: string[];
}

export const initialAlbumState: IAlbumState = {
    name: null,
    userId: null,
    photos: null
} 
