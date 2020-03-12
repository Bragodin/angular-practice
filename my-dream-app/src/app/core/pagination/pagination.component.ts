import { Component, OnInit, Input, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
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
  @Input() page: number;
  @Input() totalCount: number;
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
    console.log(this.count);
    // isNext && this.page >= 1 && this.page < this.totalCount + 1? this.page++:this.page--;
    let maxPage = this.totalCount / this.count;
    if(isNext && this.page < maxPage){
      this.page++;
    } else if(!isNext && this.page > 1) {
      this.page--;
    }
    // this._state.dispatch(new PostUsersPage(this.page));
    this.onChangePage.emit({page: this.page, count: this.count});
  }
}
