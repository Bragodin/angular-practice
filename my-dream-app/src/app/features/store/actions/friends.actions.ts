import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { Friends } from 'src/app/models/friend.model';
import { Friendship } from 'src/app/models/friendship.model';

export enum EFriendsActions{
    GetMyFriends = '[Friends] Get Frineds',
    GetMyFriendsSuccess = '[Friends] Get Frineds Success',
    DeleteFriend = '[Friend] Delete Friend',
    DeleteFriendSuccess = '[Friend] Delete Friend Success',
    PostFriend = '[Friend] post Friend',
    PostFriendSuccess = '[Friend] Post Friend Success'
}

export class GetMyFriends implements Action {
    public readonly type = EFriendsActions.GetMyFriends;
    constructor(public payload: string){}
}

export class GetMyFriendsSuccess implements Action {
    public readonly type = EFriendsActions.GetMyFriendsSuccess;
    constructor(public payload: User[]){}
}

export class DeleteFriend implements Action {
    public readonly type = EFriendsActions.DeleteFriend;
    constructor(public payload: Friends){
    }
} 

export class DeleteFriendSuccess implements Action {
    public readonly type = EFriendsActions.DeleteFriendSuccess;
    constructor(public payload: string){}
}

export class PostFriend implements Action {
    public readonly type = EFriendsActions.PostFriend;
    constructor(public payload: Friendship){}
}

export class PostFriendSuccess implements Action {
    public readonly type = EFriendsActions.PostFriendSuccess;
    constructor(public payload: User){}
}

export type FriendsActions = GetMyFriendsSuccess | GetMyFriendsSuccess | DeleteFriendSuccess | DeleteFriend | PostFriendSuccess;