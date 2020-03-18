import { Action } from '@ngrx/store';

export enum ENotificationsActions {
    GetNotifications = '[Notifications] Get Notifications',
    GetNotificationsSuccess = '[Notifications] Get Notifications Success',
    DeleteNotification = '[Notifications] Delete Notification',
    DeleteMeggaseNotification = "DeleteMeggaseNotification"
}

export class GetNotifications implements Action {
    public readonly type = ENotificationsActions.GetNotifications;
    constructor(public payload: string){}
}

export class GetNotificationsSuccess implements Action {
    public readonly type = ENotificationsActions.GetNotificationsSuccess;
    constructor(public payload: any){}
}

export class DeleteNotification implements Action {
    public readonly type = ENotificationsActions.DeleteNotification;
    constructor(public payload: any){}
}

// export class DeleteMeggaseNotification implements Action {
//     public readonly type = ENotificationsActions.DeleteMeggaseNotification;
//     constructor(public payload: any){}
// }

export type NotificationsActions = GetNotifications | GetNotificationsSuccess | DeleteNotification;