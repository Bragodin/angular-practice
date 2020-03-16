import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../features/services/search.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { GetMyUsers } from 'src/app/features/store/actions/user.actions';
import { selectUsers } from 'src/app/features/store/selectors/user.selectors';


@Component({
  selector: 'app-people-container',
  template: `<app-people [result]='result'></app-people>
             <app-pagination (onChangePage)='onChangePage($event)' [totalCount]='totalCount'></app-pagination>`
})
export class PeopleConteinerComponent implements OnInit {
  result: object;
  totalCount: number;
  constructor(private _store: Store<IAppState>) { 
  }
  ngOnInit(){
    this._store.dispatch(new GetMyUsers({page: 1, count: 5}));
    this._store.pipe(select(selectUsers)).subscribe(
        data => {
          if(data && data[0]){
            this.totalCount = data[0].totalCount;
            return this.result = data;
          }
        }
    )
  }
  onChangePage(page){
    console.log(page)
    this._store.dispatch(new GetMyUsers({page: page.page, count: page.count}));
  }
}
