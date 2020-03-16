import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { DeleteMyUser } from 'src/app/features/store/actions/user.actions';
import {  selectLogout } from 'src/app/features/store/selectors/user.selectors';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {
  sub: Subscription;
  constructor(private _store: Store<IAppState>, private router: Router) { }
  ngOnInit() {
  }
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  ngDoCheck(){
  }
  deleteProfile(){
    const id = localStorage.getItem('id');
    this._store.dispatch(new DeleteMyUser(id));
    this._store.pipe(select(selectLogout)).subscribe(
      data => {
        if(!localStorage.getItem('id')){
          this.router.navigate([`/login`]);
        }
      }
    );
  }
}
