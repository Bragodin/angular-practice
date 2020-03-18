import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from '../../models/album.model';
import { Observable } from 'rxjs';
import { Photo } from '../../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http: HttpClient) { }
  getUserAlbums(id): Observable<Album[]> {
    return this.http.get<Album[]>(`http://localhost:3000/album/${id}`);
  }
  sendPhotos(file, item){
    return this.http.post(`http://localhost:3000/files/?userId=${item.userId}&albumId=${item._id}`, file);
  }
  updateAlbum(id, album): Observable<Album> {
    return this.http.put<Album>(`http://localhost:3000/album/${id}`, album);
  }
  deltePhoto(image): Observable<Photo>{
    return this.http.delete<Photo>(`http://localhost:3000/photo/${image}`);
  }
  removeAlbum(id): Observable<Album> {
    return this.http.delete<Album>(`http://localhost:3000/album/${id}`);
  }
  addAlbum(album): Observable<Album> {
    return this.http.post<Album>(`http://localhost:3000/album/add`, album);
  }
  sendAvatar(avatar, id): Observable<any> {
    return this.http.put<Album>(`http://localhost:3000/file/avatar/${id}`, avatar);
  } 
}
