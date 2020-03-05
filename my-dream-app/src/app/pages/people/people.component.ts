import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, Subscription, of } from 'rxjs';
import { filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { SearchService } from '../../features/services/search.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit, OnDestroy {
  amount = new FormControl('', []);
  rightUsers: object;
  @Input() result: object;
  sub: Subscription;
  constructor(private searchService: SearchService) { 
  }
  ngOnInit(){
    this.sub = this.amount.valueChanges.pipe(
      debounceTime(400),
      filter(value => value.length > 0),
      switchMap(term => this.searchService.search(term))
    ).subscribe( result => {
      this.result = result;
      this.rightUsers = result;
    })
  }
  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
}
