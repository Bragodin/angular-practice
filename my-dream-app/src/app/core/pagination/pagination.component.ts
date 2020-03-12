import { Component, OnInit, Input, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { PostUsersPage } from 'src/app/features/store/actions/pagination.actions';
import { selectUserPage } from 'src/app/features/store/selectors/pagination.selectors';
import { EventEmitter } from '@angular/core';
import { Page } from 'src/app/models/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  selected = '5';
  @Input() page: number = 0;
  constructor(private _state: Store<IAppState>) { }
  count: number = 5;
  @Output() onChangePage = new EventEmitter<Page>();
  ngOnInit() {
    this._state.pipe(select(selectUserPage)).subscribe(
      page => this.page = page
    );
  }
  changePage(isNext){
    this.count = +this.selected;
    isNext? this.page = this.page + this.count:this.page = this.page - this.count;
    // this._state.dispatch(new PostUsersPage(this.page));
    this.onChangePage.emit({page: this.page, count: this.count});
  }
}
