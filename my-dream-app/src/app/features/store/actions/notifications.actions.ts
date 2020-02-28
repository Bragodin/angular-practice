import { Action } from '@ngrx/store';
import { INotificationsState } from '../state/notification.state';

export enum ENotificationsActions{
    GetNotifications = '[Notifications] Get Notifications',
    GetNotificationsSuccess = '[Notifications] Get Notifications Success'
}

export class GetNotifications implements Action {
    public readonly type = ENotificationsActions.GetNotifications;
}

export class GetNotificationsSuccess implements Action {
    public readonly type = ENotificationsActions.GetNotificationsSuccess;
    constructor(public payload: INotificationsState){}
}

export type NotificationsActions = GetNotifications | GetNotificationsSuccess;