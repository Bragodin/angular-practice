import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { switchMap, map, catchError } from 'rxjs/operators';
import { GetAlbums, EAlbumsActions, GetAlbumsSuccess, DeleteAlbums, DeleteAlbumsSuccess, PostAlbum, PostAlbumSuccess } from '../actions/albums.actions';
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
            return new PostAlbumSuccess(album);
        })        
    );

    constructor(private _actions$: Actions, private albumService: AlbumService) { 
    }
}