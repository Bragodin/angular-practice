import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { ENotificationsActions, GetNotifications, GetNotificationsSuccess } from '../actions/notifications.actions';
import { NotificationsService } from '../../services/notifications.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { INotificationsState } from '../state/notification.state';

@Injectable()
export class NotificationsEffects {
    @Effect()
    getNotifications$ = this._actions$.pipe(
        ofType<GetNotifications>(ENotificationsActions.GetNotifications),
        switchMap(() => {
            console.log('notification effect')
            return this.notificationsService.getUserNotifications(localStorage.getItem('id'))}),
        map((notifications: INotificationsState)=> {
            console.log(JSON.stringify(notifications[0]) + 'NOT')    
            return new GetNotificationsSuccess(notifications[0]);
        })        
    );
    
    constructor(private _actions$: Actions, private notificationsService: NotificationsService) { 
    }
}
