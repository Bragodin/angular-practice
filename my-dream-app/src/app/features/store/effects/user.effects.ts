import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GetUser, EUserActions, GetUserSuccess } from '../actions/user.actions';
import { UsersService } from '../../services/users.service';

@Injectable()
export class UserEffects {
    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        switchMap(() => {
            console.log('notification effect')
            return this.usersService.getUserById(localStorage.getItem('id'))
        }),
        switchMap( (user: any)=> {
            return of(new GetUserSuccess(user))
        })        
    );
    
    constructor(private _actions$: Actions, private usersService: UsersService) { }
}
