import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { GetMyDialog, EDialogActions, GetMyDialogSuccess, PostDialog, PostDialogSuccess, PostMessage, PostMessageSuccess } from '../actions/dialog.actions';
import { DialogService } from '../../services/dialog.service';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { selectUser } from '../selectors/user.selectors';
import { WebsocketService } from '../../services/websoket.service';
import { selectDialogId } from '../selectors/dialog.selectors';

@Injectable()
export class DialogEffects {
    @Effect()
    postDialog$ = this._actions$.pipe(
        ofType<PostDialog>(EDialogActions.PostDialog),
        switchMap((action) => {
            const body = {
                users: [action.payload, action.payload_second]
            }
            return this.dialogService.addDialog(body);
        }),
        map((dialog)=> { 
            return new PostDialogSuccess(dialog)
        })        
    );
    @Effect()
    getDialog$ = this._actions$.pipe(
        ofType<GetMyDialog>(EDialogActions.GetMyDialog),
        switchMap((action) => {
            return this.dialogService.getDialog(action.payload);
        }),
        withLatestFrom(this._store.pipe(select(selectUser))),
        map(([dialog, user])=> {   
            if(dialog && dialog.length > 0){
                return new GetMyDialogSuccess(dialog[0]);
            } else {
                return new PostDialog(localStorage.getItem('id'), user._id);
            }
        })        
    );

    @Effect()
    postMessage$ = this._actions$.pipe(
        ofType<PostMessage>(EDialogActions.PostMessage),
        withLatestFrom(this._store.pipe(select(selectDialogId))),
        switchMap(([action, dialogId]) => {
            const messageData = {
                ...action.payload,
                dialogId: dialogId
            }
            console.log(messageData)
            const dialog = this.websocketService.sendMessage(messageData);
            return [dialog];
        }),
        map((dialog)=> {   
            const message = {
                dialogId: dialog.dialogId,
                ownerId: dialog.myid,
                message: dialog.message
            }
            return new PostMessageSuccess(message);
        })        
    );

    constructor(private _actions$: Actions, private dialogService: DialogService , private _store: Store<IAppState>, private websocketService: WebsocketService) { 
    }
}
