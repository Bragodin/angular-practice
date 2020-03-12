import { Action } from '@ngrx/store';
import { Album } from 'src/app/models/album.model';

export enum EAlbumsActions {
  GetAlbums = '[Albums] Get Albums',
  GetAlbumsSuccess = '[Albums] Get Albums Succeess',
  DeleteAlbums = '[Album] Delete Album',
  DeleteAlbumsSuccess = '[Album] Delete Album Success',
  PostAlbum = '[Album] Post Album', 
  PostAlbumSuccess = '[Album] Post Album Success'
}

export class GetAlbums implements Action {
    public readonly type = EAlbumsActions.GetAlbums;
    constructor(public payload: string){}
}

export class GetAlbumsSuccess implements Action {
    public readonly type = EAlbumsActions.GetAlbumsSuccess;
    constructor(public payload: Album[]){}
}

export class DeleteAlbums implements Action {
    public readonly type = EAlbumsActions.DeleteAlbums;
    constructor(public payload: string){}
}

export class DeleteAlbumsSuccess implements Action {
    public readonly type = EAlbumsActions.DeleteAlbumsSuccess;
    constructor(public payload: Album){}
}

export class PostAlbum implements Action {
    public readonly type = EAlbumsActions.PostAlbum;
    constructor(public payload: Album){}
}

export class PostAlbumSuccess implements Action {
    public readonly type = EAlbumsActions.PostAlbumSuccess;
    constructor(public payload: Album){}
}

export type AlbumsActions = GetAlbumsSuccess | DeleteAlbumsSuccess | PostAlbumSuccess;