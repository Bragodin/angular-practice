import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { ENotificationsActions, GetNotifications, GetNotificationsSuccess, DeleteMessageNotification, DeleteMessageNotificationSuccess, DeleteFriendNotification, DeleteFriendNotificationSuccess } from '../actions/notifications.actions';
import { NotificationsService } from '../../services/notifications.service';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class NotificationsEffects {
    @Effect()
    getNotifications$ = this._actions$.pipe(
        ofType<GetNotifications>(ENotificationsActions.GetNotifications),
        switchMap((action) => {
            return this.notificationsService.getUserNotifications(action.payload)
        }),
        map((notification)=> {
            return new GetNotificationsSuccess(notification);
        })        
    );

    @Effect()
    deleteNotifications$ = this._actions$.pipe(
        ofType<DeleteMessageNotification>(ENotificationsActions.DeleteMessageNotification),
        switchMap((action) => {
            return this.notificationsService.removeMessageNotification(action.payload.myId, action.payload.userId)
        }),
        map((data)=> {
            return new DeleteMessageNotificationSuccess(data);
        })        
    );

    @Effect()
    deleteFriendNotifications$ = this._actions$.pipe(
        ofType<DeleteFriendNotification>(ENotificationsActions.DeleteFriendNotification),
        switchMap((action) => {
            return this.notificationsService.removeFriendNotification(action.payload.myId, action.payload.userId);
        }),
        map((id: any) => {
            return new DeleteFriendNotificationSuccess(id.friendRequestId);
        })        
    );
    constructor(private _actions$: Actions, private notificationsService: NotificationsService) {}
}
