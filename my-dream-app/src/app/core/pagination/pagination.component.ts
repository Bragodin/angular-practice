import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { PostPage } from 'src/app/features/store/actions/pagination.actions';
import { selectUserPage } from 'src/app/features/store/selectors/pagination.selectors';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  page: number = 0;
  constructor(private _state: Store<IAppState>) { }
  @Input() count: number;
  ngOnInit() {
    this._state.pipe(select(selectUserPage)).subscribe(
      page => this.page = page
    );
  }
  changePage(count){
    // console.log(count)
    // console.log()
    this.page = this.page + count;
    this._state.dispatch(new PostPage(this.page));
  }
   
}
