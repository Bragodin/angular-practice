import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralStateService {
  private notifications$ = new BehaviorSubject<any>(null);
  notificationsState = this.notifications$.asObservable();
  constructor() { }
  updatedDataSelection(data){
    this.notifications$.next(data);
  }
}
