import { Action } from '@ngrx/store';
import { Dialog } from 'src/app/models/dialog.model';
import { Message } from '../../../models/message.model';

export enum EDialogActions {
    GetMyDialog = '[Dialog] Get Dialog',
    GetMyDialogSuccess = '[Dialog] Get Dialog Success',
    PostDialog = '[Dialog] Post Dialog',
    PostDialogSuccess = '[Dialog] Post Dialog Success',
    PostMessage = '[Dialog] Post Message To Dialog',
    PostMessageSuccess = '[Dialog] Post Message To Dialog Success',
    GetMessage = "[Dialog] Get Message"
}

export class GetMyDialog implements Action {
    public readonly type = EDialogActions.GetMyDialog;
    constructor(public payload: string[]){}
}

export class GetMyDialogSuccess implements Action {
    public readonly type = EDialogActions.GetMyDialogSuccess;
    constructor(public payload: Dialog){}
}

export class PostDialog implements Action {
    public readonly type = EDialogActions.PostDialog;
    constructor(public payload: string, public payload_second: string){}
}

export class PostDialogSuccess implements Action {
    public readonly type = EDialogActions.PostDialogSuccess;
    constructor(public payload: any){}
}

export class PostMessage implements Action {
    public readonly type = EDialogActions.PostMessage;
    constructor(public payload: any){}
}
export class PostMessageSuccess implements Action {
    public readonly type = EDialogActions.PostMessageSuccess;
    constructor(public payload: any){}
}

export class GetMessage implements Action {
    public readonly type = EDialogActions.GetMessage;
    constructor(public payload: any){
    }
}

export type DialogActions = GetMyDialogSuccess | PostDialogSuccess | PostMessageSuccess | GetMessage;