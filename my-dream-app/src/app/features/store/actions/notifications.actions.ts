import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { Id } from 'src/app/models/id.model';
import { Notification } from '../../../models/notification.model';
import { Friends } from 'src/app/models/friend.model';

export enum ENotificationsActions {
    GetNotifications = '[Notifications] Get Notifications',
    GetNotificationsSuccess = '[Notifications] Get Notifications Success',
    DeleteNotification = '[Notifications] Delete Notification',
    DeleteMeggaseNotification = "[Notifications] DeleteMeggaseNotification",
    PostMessageNotification = '[Notifications] Post Message Notification',
    DeleteMessageNotification = '[Notifications] Delete Message Notification',
    DeleteMessageNotificationSuccess = '[Notifications] Delete Message Notification Success',
    DeleteFriendNotificationSuccess = '[Notifications] Delete Friend Notification Success',
    DeleteFriendNotification = '[Notifications] Delete Friend Notification'
}

export class GetNotifications implements Action {
    public readonly type = ENotificationsActions.GetNotifications;
    constructor(public payload: string){}
}  

export class GetNotificationsSuccess implements Action {
    public readonly type = ENotificationsActions.GetNotificationsSuccess;
    constructor(public payload: Notification){}
}

export class DeleteNotification implements Action {
    public readonly type = ENotificationsActions.DeleteNotification;
    constructor(public payload: User){}
}

export class PostMessageNotification implements Action {
    public readonly type = ENotificationsActions.PostMessageNotification;
    constructor(public payload: any){
    }
}

export class DeleteMessageNotification implements Action {
    public readonly type = ENotificationsActions.DeleteMessageNotification;
    constructor(public payload: any){}
}

export class DeleteMessageNotificationSuccess implements Action {
    public readonly type = ENotificationsActions.DeleteMessageNotificationSuccess;
    constructor(public payload: Notification){}
}

export class DeleteFriendNotificationSuccess implements Action {
    public readonly type = ENotificationsActions.DeleteFriendNotificationSuccess;
    constructor(public payload: Id){}
}

export class DeleteFriendNotification implements Action {
    public readonly type = ENotificationsActions.DeleteFriendNotification;
    constructor(public payload: Friends){}
}

export class DeleteMeggaseNotification implements Action {
    public readonly type = ENotificationsActions.DeleteMeggaseNotification;
    constructor(public payload: string){}
}

export type NotificationsActions = GetNotifications | GetNotificationsSuccess | DeleteNotification | PostMessageNotification | DeleteMessageNotificationSuccess | DeleteFriendNotificationSuccess;