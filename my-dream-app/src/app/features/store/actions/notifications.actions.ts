import { Action } from '@ngrx/store';

export enum ENotificationsActions {
    GetNotifications = '[Notifications] Get Notifications',
    GetNotificationsSuccess = '[Notifications] Get Notifications Success',
    DeleteNotification = '[Notifications] Delete Notification',
    DeleteMeggaseNotification = "[Notifications] DeleteMeggaseNotification",
    PostMessageNotification = '[Notifications] Post Message Notification',
    DeleteMessageNotification = '[Notifications] Delete Message Notification',
    DeleteMessageNotificationSuccess = '[Notifications] Delete Message Notification Success'
}

export class GetNotifications implements Action {
    public readonly type = ENotificationsActions.GetNotifications;
    constructor(public payload: any){}
}

export class GetNotificationsSuccess implements Action {
    public readonly type = ENotificationsActions.GetNotificationsSuccess;
    constructor(public payload: any){}
}

export class DeleteNotification implements Action {
    public readonly type = ENotificationsActions.DeleteNotification;
    constructor(public payload: any){}
}

export class PostMessageNotification implements Action {
    public readonly type = ENotificationsActions.PostMessageNotification;
    constructor(public payload: any){}
}

export class DeleteMessageNotification implements Action {
    public readonly type = ENotificationsActions.DeleteMessageNotification;
    constructor(public payload: any){}
}

export class DeleteMessageNotificationSuccess implements Action {
    public readonly type = ENotificationsActions.DeleteMessageNotificationSuccess;
    constructor(public payload: any){}
}
// export class DeleteMeggaseNotification implements Action {
//     public readonly type = ENotificationsActions.DeleteMeggaseNotification;
//     constructor(public payload: any){}
// }

export type NotificationsActions = GetNotifications | GetNotificationsSuccess | DeleteNotification | PostMessageNotification | DeleteMessageNotificationSuccess;