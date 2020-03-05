import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { GetMyDialog, EDialogActions, GetMyDialogSuccess, PostDialog, PostDialogSuccess } from '../actions/dialog.actions';
import { DialogService } from '../../services/dialog.service';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { selectUser } from '../selectors/user.selectors';

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
            const dialog = this.dialogService.getDialog(action.payload);
            return dialog;
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
    constructor(private _actions$: Actions, private dialogService: DialogService , private _store: Store<IAppState>) { 
    }
}
