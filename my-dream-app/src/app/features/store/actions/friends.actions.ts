import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export enum EFriendsActions{
    GetMyFriends = '[Friends] Get Frineds',
    GetMyFriendsSuccess = '[Friends] Get Frineds Success'
}

export class GetMyFriends implements Action {
    public readonly type = EFriendsActions.GetMyFriends;
    constructor(public payload: string){}
}

export class GetMyFriendsSuccess implements Action {
    public readonly type = EFriendsActions.GetMyFriendsSuccess;
    constructor(public payload: User[]){}
}

export type FriendsActions = GetMyFriendsSuccess | GetMyFriendsSuccess;