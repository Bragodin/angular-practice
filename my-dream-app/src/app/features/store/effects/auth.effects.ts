import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'; 
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthEffects {
    // @Effect()
    // getAuth$ = this._actions$.pipe(
    //     ofType
    // )
  constructor(private _actions$: Actions) { 
  }
}
