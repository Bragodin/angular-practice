import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dialog } from '../../models/dialog.model';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private http: HttpClient) { }
  addDialog(dialog: Dialog){
    return this.http.post('http://localhost:3000/dialog/add', dialog);
  }
  getDialog(body){
    return this.http.post<any>(`http://localhost:3000/dialog/getMyDialog`, body)
  }
}
