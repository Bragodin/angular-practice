import { Action } from '@ngrx/store';

export enum EErrorsActions{
    CreateError = '[Error] Create Error'
}

export class CreateError implements Action {
    public readonly type = EErrorsActions.CreateError;
    constructor(public payload: any){}
}

export type ErrorsActions = CreateError;