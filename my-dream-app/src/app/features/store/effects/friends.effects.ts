import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { EFriendsActions, GetMyFriends, GetMyFriendsSuccess, DeleteFriend, DeleteFriendSuccess, PostFriendSuccess, PostFriend } from '../actions/friends.actions';
import { FriendsService } from '../../services/friends.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { selectUser } from '../selectors/user.selectors';
import { DeleteNotification } from '../actions/notifications.actions';
import { Friendship } from 'src/app/models/friendship.model';

@Injectable()
export class FriendsEffects {
    @Effect()
    getFriends$ = this._actions$.pipe(
        ofType<GetMyFriends>(EFriendsActions.GetMyFriends),
        switchMap((action: GetMyFriends) => {
            return this.friendsService.getMyFriends(action.payload);
        }),
        map((friends: any)=> {  
            return new GetMyFriendsSuccess(friends);
        })        
    );

    @Effect()
    deleteFriend$ = this._actions$.pipe(
        ofType<DeleteFriend>(EFriendsActions.DeleteFriend),
        switchMap((action: DeleteFriend) => {
            return this.friendsService.removeFromFriends(action.payload.myId, action.payload.userId);
        }),
        map((user: Friendship)=> {
            if(user.friend1 === localStorage.getItem('id')){
                return new DeleteFriendSuccess(user.friend2);
            }
            else { 
                return new DeleteFriendSuccess(user.friend1);
            }
        })        
    );
    
    @Effect()
    postFriend$ = this._actions$.pipe(
        ofType<PostFriend>(EFriendsActions.PostFriend),
        switchMap((action: PostFriend) => {
            return this.friendsService.addToFriends(action.payload);
        }),
        withLatestFrom(this._store.pipe(select(selectUser))),
        switchMap(([friends, activeUser])=> [
            new PostFriendSuccess(activeUser),
            new DeleteNotification(activeUser)
        ])      
    );

    constructor(private _actions$: Actions, private friendsService: FriendsService, private _store: Store<IAppState> ) { 
    }
}
