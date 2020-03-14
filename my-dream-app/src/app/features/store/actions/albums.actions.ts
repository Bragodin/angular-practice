import { Action } from '@ngrx/store';
import { Album } from 'src/app/models/album.model';
import { Photo } from 'src/app/models/photo.model';

export enum EAlbumsActions {
  GetAlbums = '[Albums] Get Albums',
  GetAlbumsSuccess = '[Albums] Get Albums Succeess',
  DeleteAlbums = '[Album] Delete Album',
  DeleteAlbumsSuccess = '[Album] Delete Album Success',
  PostAlbum = '[Album] Post Album', 
  PostAlbumSuccess = '[Album] Post Album Success',
  PostPhotos = '[Album] Post Photos',
  PostPhotosSuccess = '[Album] Post Photos Success',
  UpdateAlbum = '[Album] Update Album',
  UpdateAlbumSuccess = '[Album] Update Album Success',
  DeletePhotos  = '[Album] Delete Photo From Album',
  DeletePhotosSuccess  = '[Album] Delete Photo From Album Success'
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

export class PostPhotos implements Action {
    public readonly type = EAlbumsActions.PostPhotos;
    constructor(public payload: any){}
}

export class PostPhotosSuccess implements Action {
    public readonly type = EAlbumsActions.PostPhotosSuccess;
    constructor(public payload: any){}
}

// export class UpdateAlbumSuccess implements Action {
//     public readonly type = EAlbumsActions.UpdateAlbumSuccess;
//     constructor(public payload: any){}
// }

// export class UpdateAlbum implements Action {
//     public readonly type = EAlbumsActions.UpdateAlbum;
//     constructor(public payload: any){}
// }

export class DeletePhotosSuccess implements Action {
    public readonly type = EAlbumsActions.DeletePhotosSuccess;
    constructor(public payload: any){}
}

export class DeletePhotos implements Action {
    public readonly type = EAlbumsActions.DeletePhotos;
    constructor(public payload: any){}
}

export type AlbumsActions = GetAlbumsSuccess | DeleteAlbumsSuccess | PostAlbumSuccess | PostPhotosSuccess | DeletePhotosSuccess;