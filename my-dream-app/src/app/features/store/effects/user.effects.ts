import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { GetUser, EUserActions, GetUserSuccess } from '../actions/user.actions';
import { UsersService } from '../../services/users.service';
import { IUserState } from '../state/user.state';

@Injectable()
export class UserEffects {
    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        switchMap(() => this.usersService.getUserById(localStorage.getItem('id'))),
        map((user: any)=> {   
            return new GetUserSuccess(user);
        })
    );
    constructor(private _actions$: Actions, private usersService: UsersService) { }
}
