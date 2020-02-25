import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { ENotificationsActions, GetNotifications } from '../actions/notifications.actions';
import { NotificationsService } from '../../services/notifications.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class NotificationsEffects {
    // @Effect()
    // getNotifications$ = this._actions$.pipe(
    //     ofType<GetNotifications>(ENotificationsActions.GetNotifications),
    //     switchMap(() => {
    //         console.log('notification effect')
    //         return this.notificationsService.getUserNotifications(localStorage.getItem('id'))}),
    //     map((notifications: any)=> {
    //         console.log(notifications + 'NOT')    
    //         return new GetNotifications(notifications)
    //     })        
    // );
    
    constructor(private _actions$: Actions, private notificationsService: NotificationsService) { 
    }
}
