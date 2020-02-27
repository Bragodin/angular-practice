import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { ENotificationsActions, GetNotifications, GetNotificationsSuccess } from '../actions/notifications.actions';
import { NotificationsService } from '../../services/notifications.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { INotificationsState } from '../state/notification.state';
import { Notification } from '../../../models/notification.model';
@Injectable()
export class NotificationsEffects {
    @Effect()
    getNotifications$ = this._actions$.pipe(
        ofType<GetNotifications>(ENotificationsActions.GetNotifications),
        switchMap(() => {
            return this.notificationsService.getUserNotifications(localStorage.getItem('id'))}),
        map((notification: any)=> {   
            return new GetNotificationsSuccess(notification[0]);
        })        
    );
    constructor(private _actions$: Actions, private notificationsService: NotificationsService) { 
    }
}
