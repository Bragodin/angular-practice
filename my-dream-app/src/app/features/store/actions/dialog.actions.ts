import { Action } from '@ngrx/store';
import { IUserState } from '../state/user.state';
import { User } from 'src/app/models/user.model';
import { LoginUserModel } from 'src/app/models/login-user.model';
import { Dialog } from 'src/app/models/dialog.model';

export enum EDialogActions{
    GetMyDialog = '[Dialog] Get Dialog',
    GetMyDialogSuccess = '[Dialog] Get Dialog Success',
    PostDialog = '[Dialog] Post Dialog',
    PostDialogSuccess = '[Dialog] Post Dialog Success'
}

export class GetMyDialog implements Action {
    public readonly type = EDialogActions.GetMyDialog;
    constructor(public payload: string[]){}
}

export class GetMyDialogSuccess implements Action {
    public readonly type = EDialogActions.GetMyDialogSuccess;
    constructor(public payload: any){}
}

export class PostDialog implements Action {
    public readonly type = EDialogActions.PostDialog;
    constructor(public payload: string, public payload_second: string){}
}

export class PostDialogSuccess implements Action {
    public readonly type = EDialogActions.PostDialogSuccess;
    constructor(public payload: any){}
}


export type DialogActions = GetMyDialogSuccess | PostDialogSuccess;