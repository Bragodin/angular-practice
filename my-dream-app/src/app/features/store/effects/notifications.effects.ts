import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { ENotificationsActions, GetNotifications, GetNotificationsSuccess, DeleteMessageNotification, DeleteMessageNotificationSuccess, DeleteFriendNotification, DeleteFriendNotificationSuccess } from '../actions/notifications.actions';
import { NotificationsService } from '../../services/notifications.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Notification } from '../../../models/notification.model';
import { Id } from 'src/app/models/id.model';

@Injectable()
export class NotificationsEffects {
    @Effect()
    getNotifications$ = this._actions$.pipe(
        ofType<GetNotifications>(ENotificationsActions.GetNotifications),
        switchMap((action: GetNotifications) => {
            return this.notificationsService.getUserNotifications(action.payload)
        }),
        map((notification: Notification)=> {
            return new GetNotificationsSuccess(notification);
        })        
    );

    @Effect()
    deleteNotifications$ = this._actions$.pipe(
        ofType<DeleteMessageNotification>(ENotificationsActions.DeleteMessageNotification),
        switchMap((action: DeleteMessageNotification) => {
            return this.notificationsService.removeMessageNotification(action.payload.myId, action.payload.userId)
        }),
        map((data)=> {
            return new DeleteMessageNotificationSuccess(data);
        })        
    );

    @Effect()
    deleteFriendNotifications$ = this._actions$.pipe(
        ofType<DeleteFriendNotification>(ENotificationsActions.DeleteFriendNotification),
        switchMap((action: DeleteFriendNotification) => {
            return this.notificationsService.removeFriendNotification(action.payload.myId, action.payload.userId);
        }),
        map((id: any) => {
            console.log('ID ID IDIDIDIDID')
            console.log(id)
            return new DeleteFriendNotificationSuccess(id.friendRequestId);
        })        
    );
    constructor(private _actions$: Actions, private notificationsService: NotificationsService) {}
}
