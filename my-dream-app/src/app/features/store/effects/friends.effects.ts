import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { switchMap, map, catchError } from 'rxjs/operators';
import { EFriendsActions, GetMyFriends, GetMyFriendsSuccess } from '../actions/friends.actions';
import { FriendsService } from '../../services/friends.service';
@Injectable()
export class FriendsEffects {
    @Effect()
    getFriends$ = this._actions$.pipe(
        ofType<GetMyFriends>(EFriendsActions.GetMyFriends),
        switchMap((action) => {
            return this.friendsService.getMyFriends(action.payload);
        }),
        map((friends: any)=> {   
            return new GetMyFriendsSuccess(friends);
        })        
    );
    constructor(private _actions$: Actions, private friendsService: FriendsService ) { 
    }
}
