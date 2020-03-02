import { Action } from '@ngrx/store';
import { IUserState } from '../state/user.state';
import { User } from 'src/app/models/user.model';
import { LoginUserModel } from 'src/app/models/login-user.model';

export enum EUserActions{
    GetMyUser = '[User] Get User',
    GetMyUserSuccess = '[User] Get User Success',
    UpdateAvatar = '[User] Update User Avatar',
    GetMyUsers = '[User] Get Users',
    GetMyUsersSuccess = '[User] Get Users Success',
    GetMyUserFailure = '[User] Get Users Failure',
    PostUser = '[User] Post User',
    PostUserSuccess = '[User] Post User Success',
    GetUserSuccess = '[User] Get User Success',
    GetAutorizationUser = '[User] Get Auth User',
    GetAutorizationUserSuccess = '[User] Get Auth User Success',
    LogoutUser = '[User] Logout User',
    LogoutUserSuccess = '[User] Logout User Success',
    LoginUser = '[User] Login User',
    LoginUserSuccess = '[User] Login User Success'
}

export class GetMyUser implements Action {
    public readonly type = EUserActions.GetMyUser;
    constructor(public payload: string){}
}

export class GetAutorizationUser implements Action {
    public readonly type = EUserActions.GetAutorizationUser;
    constructor(public payload: string){}
}

export class GetAutorizationUserSuccess implements Action {
    public readonly type = EUserActions.GetAutorizationUserSuccess;
    constructor(public payload: User){}  
}

export class GetMyUsers implements Action {
    public readonly type = EUserActions.GetMyUsers;
    constructor(public payload?: string){}
}

export class GetMyUsersSuccess implements Action {
    public readonly type = EUserActions.GetMyUsersSuccess;
    constructor(public payload: User[]){}
}

export class GetUserSuccess implements Action {
    public readonly type = EUserActions.GetUserSuccess;
    constructor(public payload?: User){}
}

export class GetUsersSuccess implements Action {
    public readonly type = EUserActions.GetMyUsers;
    constructor(public payload?: string){}
}

export class UpdateAvatar implements Action {
    public readonly type = EUserActions.UpdateAvatar;
    constructor(public payload: string){}
}

export class GetMyUserSuccess implements Action {
    public readonly type = EUserActions.GetMyUserSuccess;
    constructor(public payload: User){}
}

export class GetMyUserFailure implements Action {
    public type = EUserActions.GetMyUserFailure;
    constructor(public payload?: any) {
    }
}

export class PostUser implements Action {
    public readonly type = EUserActions.PostUser;
    constructor(public payload: User){}
}

export class PostUserSuccess implements Action {
    public readonly type = EUserActions.PostUserSuccess;
    constructor(public payload: User){}
}

export class LogoutUser implements Action {
    public readonly type = EUserActions.LogoutUser;
}

export class LogoutUserSuccess implements Action {
    public readonly type = EUserActions.LogoutUserSuccess;
}

export class LoginUser implements Action {
    public readonly type = EUserActions.LoginUser;
    constructor(public payload: LoginUserModel){}
}

export class LoginUserSuccess implements Action {
    public readonly type = EUserActions.LoginUserSuccess;
    constructor(public payload: LoginUserModel){}
}

export type UserActions = GetMyUserSuccess | GetMyUser | UpdateAvatar 
| GetMyUsers | GetMyUsersSuccess | GetMyUserFailure | 
GetUserSuccess | GetAutorizationUserSuccess | GetAutorizationUser | PostUser | 
PostUserSuccess | LogoutUserSuccess | LoginUserSuccess;