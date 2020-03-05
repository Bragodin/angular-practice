import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../features/services/search.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { GetMyUsers } from 'src/app/features/store/actions/user.actions';
import { selectUsers } from 'src/app/features/store/selectors/user.selectors';


@Component({
  selector: 'app-people-container',
  template: `<app-people [result]='result'></app-people>`
})
export class PeopleConteinerComponent implements OnInit {
  result: object;
  constructor(private _store: Store<IAppState>) { 
  }
  ngOnInit(){
    this._store.dispatch(new GetMyUsers());
    this._store.pipe(select(selectUsers)).subscribe(
        data => this.result = data
    );
  }
}
