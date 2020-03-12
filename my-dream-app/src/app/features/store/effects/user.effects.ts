import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { switchMap, map, catchError } from 'rxjs/operators';
import { GetMyUser, EUserActions, GetMyUserSuccess, GetMyUsers, GetMyUsersSuccess, GetMyUserFailure, PostUser, PostUserSuccess, GetUserSuccess, GetAutorizationUser, GetAutorizationUserSuccess, LogoutUser, LogoutUserSuccess, LoginUser, LoginUserSuccess, UpdateMyUser, UpdateMyUserSuccess } from '../actions/user.actions';
import { UsersService } from '../../services/users.service';
import { of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { LoginService } from '../../services/login.service';

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
        switchMap((action) => { 
            return this.usersService.getUsers(action.payload.page, action.payload.count);
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
        ofType<PostUser>(EUserActions.PostUser),
        switchMap((action) => { 
            return this.loginService.register(action.payload);
        }), 
        map((users: any) => {  
            localStorage.setItem('id', users.user._id);
            localStorage.setItem('token', users.token);
            return new PostUserSuccess(users.user);
        })
    );
    @Effect()
    logoutUser$ = this._actions$.pipe(
        ofType<LogoutUser>(EUserActions.LogoutUser),
        switchMap(() => { 
            return this.loginService.logout();
        }), 
        map(() => {  
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            return new LogoutUserSuccess();
        })
    );
    
    @Effect()
    loginUser$ = this._actions$.pipe(
        ofType<LoginUser>(EUserActions.LoginUser),
        switchMap((action) => { 
            return this.loginService.login(action.payload);
        }), 
        map((user) => { 
            localStorage.setItem('id', user.user._id);
            localStorage.setItem('token', user.token);
            return new LoginUserSuccess(user.user);
        })
    );
    @Effect()
    updateUser$ = this._actions$.pipe(
        ofType<UpdateMyUser>(EUserActions.UpdateMyUser),
        switchMap((action) => { 
            return this.usersService.updateUsers(localStorage.getItem('id'), action.payload);
        }), 
        map((user) => { 
            console.log('Update user Effect')
            console.log(user)
            return new UpdateMyUserSuccess(user);
        })
    );
    
    constructor(private _actions$: Actions, private usersService: UsersService, private loginService: LoginService ) { }
}
