import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { ENotificationsActions, GetNotifications, GetNotificationsSuccess, DeleteMessageNotification, DeleteMessageNotificationSuccess } from '../actions/notifications.actions';
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
            console.log('MY ID: ')
            console.log(action.payload.myId);
            console.log('USER ID: ')
            console.log(action.payload.userId)
            return this.notificationsService.removeMessageNotification(action.payload.myId, action.payload.userId)
        }),
        map((data)=> {
            return new DeleteMessageNotificationSuccess(data);
        })        
    );
    constructor(private _actions$: Actions, private notificationsService: NotificationsService) {}
}
