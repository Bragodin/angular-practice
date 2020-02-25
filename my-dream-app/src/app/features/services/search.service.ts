import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient){}
  search(term: string) {
    return this.http.get(`http://localhost:3000/users/name/${term}`);
  }
}
