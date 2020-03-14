import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { switchMap, map, catchError } from 'rxjs/operators';
import { GetAlbums, EAlbumsActions, GetAlbumsSuccess, DeleteAlbums, DeleteAlbumsSuccess, PostAlbum, PostAlbumSuccess, PostPhotos, PostPhotosSuccess, DeletePhotos, DeletePhotosSuccess } from '../actions/albums.actions';
import { AlbumService } from '../../services/album.service';
import { Album } from 'src/app/models/album.model';

@Injectable()
export class AlbumsEffects {
    @Effect()
    getAlbums$ = this._actions$.pipe(
        ofType<GetAlbums>(EAlbumsActions.GetAlbums),
        switchMap((action) => {
            return this.albumService.getUserAlbums(action.payload)}),
        map((albums: Album[]) => {
            return new GetAlbumsSuccess(albums);
        })        
    );
    
    @Effect()
    romoveAlbum$ = this._actions$.pipe(
        ofType<DeleteAlbums>(EAlbumsActions.DeleteAlbums),
        switchMap((action) => {
            return this.albumService.removeAlbum(action.payload);
        }),
        map((album: any) => {
            return new DeleteAlbumsSuccess(album);
        })        
    ); 

    @Effect()
    postAlbum$ = this._actions$.pipe(
        ofType<PostAlbum>(EAlbumsActions.PostAlbum),
        switchMap((action) => {
            return this.albumService.addAlbum(action.payload);
        }),
        map((album: Album) => {
            album.photosName = [];
            return new PostAlbumSuccess(album);
        })        
    );

    @Effect()
    postPhotos$ = this._actions$.pipe(
        ofType<PostPhotos>(EAlbumsActions.PostPhotos),
        switchMap((action) => {
            return this.albumService.sendPhotos(action.payload.formData, action.payload.item);
        }),
        map((photos: any) => {
            return new PostPhotosSuccess(photos);
        })        
    );
    // @Effect()
    // updateAlbum$ = this._actions$.pipe(
    //     ofType<UpdateAlbum>(EAlbumsActions.UpdateAlbum),
    //     switchMap((action) => {
    //         console.log('update effect')
    //         console.log(action.payload)
    //         return this.albumService.updateAlbum(action.payload.id, action.payload.item);
    //     }),
    //     map((album: any) => {
    //         console.log('update effect 2')
    //         console.log(album)
    //         return new UpdateAlbumSuccess(album);
    //     })        
    // );

    @Effect()
    removePhotos$ = this._actions$.pipe(
        ofType<DeletePhotos>(EAlbumsActions.DeletePhotos),
        switchMap((action) => {
            return this.albumService.deltePhoto(action.payload.image);
        }),
        map((data: any) => {
            return new DeletePhotosSuccess(data);
        })       
    );

    constructor(private _actions$: Actions, private albumService: AlbumService) { 
    }
}