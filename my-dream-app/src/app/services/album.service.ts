import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from '../models/album.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http: HttpClient) { }
  getUserAlbums(id): Observable<Album[]> {
    return this.http.get<Album[]>(`http://localhost:3000/album/${id}`);
  }
  sendPhotos(file){
    console.log('send photo service')
    return this.http.post(`http://localhost:3000/files`, file);
  }
  updateAlbum(id, album): Observable<Album> {
    console.log(album)
    return this.http.put<Album>(`http://localhost:3000/album/${id}`, album);
  }
  removeAlbum(id): Observable<Album> {
    return this.http.delete<Album>(`http://localhost:3000/album/${id}`);
  }
  addAlbum(album): Observable<Album> {
    return this.http.post<Album>(`http://localhost:3000/album/add`, album);
  }
}
