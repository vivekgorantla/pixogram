import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private baseUrl = 'http://localhost:8003/upload';

  constructor(private http: HttpClient) { }

  StoreMedia(mediafile: FormData, id: number): Observable<Object> {
    return this.http.post(this.baseUrl + '/storeImages/' + id, mediafile);
  }
  
  getUserMedia(id: number): Observable<any> {
    return  this.http.get(this.baseUrl + '/getUserMedia/' + id);
  }

}
