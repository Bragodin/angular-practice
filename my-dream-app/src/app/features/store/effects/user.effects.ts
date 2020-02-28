import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { switchMap, map, catchError } from 'rxjs/operators';
import { GetMyUser, EUserActions, GetMyUserSuccess, GetMyUsers, GetMyUsersSuccess, GetMyUserFailure, PostUser, PostUserSuccess, GetUserSuccess, GetAutorizationUser, GetAutorizationUserSuccess } from '../actions/user.actions';
import { UsersService } from '../../services/users.service';
import { of } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserEffects {
    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetMyUser>(EUserActions.GetMyUser),
        switchMap((action) => {
            return this.usersService.getUserById(action.payload)}),
        map((user: User)=> {   
            return new GetMyUserSuccess(user);
        }),
        catchError((err) => of(new GetMyUserFailure(err)))
    );
    @Effect()
    getMyUsers$ = this._actions$.pipe(
        ofType<GetMyUsers>(EUserActions.GetMyUsers),
        switchMap(() => { 
            return this.usersService.getUsers()
        }), 
        map((users: User[])=> {   
            return new GetMyUsersSuccess(users);
        }),
        catchError((err) => of(new GetMyUserFailure(err)))
    );

    @Effect()
    getAuthUser$ = this._actions$.pipe(
        ofType<GetAutorizationUser>(EUserActions.GetAutorizationUser),
        switchMap((action) => {
            return this.usersService.getUserById(action.payload)}),
        map((user: User) => {   
            return new GetAutorizationUserSuccess(user);
        })
    );
    @Effect()
    postUser$ = this._actions$.pipe(
        ofType<PostUser>(EUserActions.GetAutorizationUser),
        switchMap((action) => { 
            return this.usersService.addUser(action.payload);
        }), 
        map((users: any) => {   
            return new PostUserSuccess(users);
        })
    );
    constructor(private _actions$: Actions, private usersService: UsersService) { }
}
