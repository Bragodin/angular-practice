import { Action } from '@ngrx/store';
import { IUserState } from '../state/user.state';

export enum EUserActions{
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success'
}

export class GetUser implements Action {
    public readonly type = EUserActions.GetUser;
    constructor(public payload?: IUserState){}
}

export class GetUserSuccess implements Action {
    public readonly type = EUserActions.GetUserSuccess;
    constructor(public payload: IUserState){}
}

export type UserActions = GetUserSuccess | GetUser;