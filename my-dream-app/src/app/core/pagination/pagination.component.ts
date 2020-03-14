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
  page: number = 1;
  @Input() totalCount: number;
  totalCountArray = [];
  count: number = +this.selected;
  maxPage: number = Math.ceil(this.totalCount / this.count);
  constructor(private _state: Store<IAppState>) { }
  @Output() onChangePage = new EventEmitter<Page>();
  ngOnInit() {
    
  }
  ngOnChanges(){
    this.calculatePage();
  }
  calculatePage(){
    this.totalCountArray = [];
    this.count = +this.selected;
    console.log('total count: ')
    console.log(this.totalCount)
    this.maxPage = Math.ceil(this.totalCount / this.count);
    this.totalCountArray.push(1);
    if(this.page  !== 2 && this.page  !== 1){
      this.totalCountArray.push('...');
    }
    for(let i = this.page - 1; i <= this.page + 1; i++){
      if(i !== 0 && i !== 1 && i !== this.maxPage && this.page !== this.maxPage){
        this.totalCountArray.push(i);
      }
    }
    if(this.maxPage - (this.page + 1) > 1){
      this.totalCountArray.push('...');
    }
    if(this.page === this.maxPage && this.maxPage !== 2){
     this.totalCountArray.push(this.maxPage - 1); 
    }
    if(this.maxPage !== 1){
      this.totalCountArray.push(this.maxPage);
    }
  }
  setPageValue(value){
    if(value !== '...'){
      this.page = value;
      console.log(this.page)
      this.calculatePage();
      this.onChangePage.emit({page: this.page, count: this.count});
    }
  }
  changeSelect(){
    this.calculatePage();
    this.onChangePage.emit({page: this.page, count: this.count});
  }
  changePage(isNext){
    this.count = +this.selected;
    this.maxPage = Math.ceil(this.totalCount / this.count);
    this.calculatePage();
    if(isNext && this.page < this.maxPage){
      this.page++;
    } else if(!isNext && this.page > 1) {
      this.page--;
    }
    this.onChangePage.emit({page: this.page, count: this.count});
  }
  getButtonNextStyle(){
   if(this.page === this.maxPage){
    return {
      'background': `#778899`,
      'pointer-events': `none`
    }
   }
  }
  getButtonPrevStyle(){
    if(this.page === 1){
      return {
        'background': `#778899`,
        'pointer-events': `none`
      }
     }
  }
  getActivePage(value){
    if(this.page === value){
      return {
        'color': `pink`
      }
     }
  }
}
