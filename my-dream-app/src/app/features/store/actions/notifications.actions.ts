import { Action } from '@ngrx/store';
import { INotificationsState } from '../state/notification.state';

export enum ENotificationsActions{
    GetNotifications = '[Notifications] Get Notifications'
}

export class GetNotifications implements Action {
    public readonly type = ENotificationsActions.GetNotifications;
    constructor(public payload?: INotificationsState){}
}

export type NotificationsActions = GetNotifications;