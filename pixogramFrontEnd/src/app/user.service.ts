import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8003/user';

  constructor(private http: HttpClient) { }
  
  firstName: String = "";
  username: String="";
  id: number;
  email: String="";

  getUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`,user);
  }

  updateUser(password: string): Observable<Object> {
    return this.http.put(this.baseUrl+'/'+this.id+'/'+password,{ responseType: 'text' });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
  
  getOtherUsers(): Observable<any> {
    return this.http.get(this.baseUrl+'s/'+this.id);
  }

  follow(uid: number, fid: number): Observable<Object> {
    return this.http.get('http://localhost:8003/follow' + '/' + uid + '/' + fid);
  }
  
  following(uid: number): Observable<any> {
    return this.http.get('http://localhost:8003/following/' + uid);
  }
  
  followers(uid: number): Observable<any> {
    return this.http.get('http://localhost:8003/followers/' + uid);
  }

  unfollow(uid:number, fid:number): Observable<any> {
    return this.http.delete('http://localhost:8003/follow/unfollow/' + uid + '/' + fid);
  }
  
  block(id: number) { 
    return this.http.put('http://localhost:8003/follow/block/'+this.id+'/'+id,{ responseType: 'text' })
  }

  getBlockedUsers() :Observable<any>{
    return this.http.get('http://localhost:8003/follow/getblockedusers/'+this.id); 
  }

  unblock(id: number) {
    return this.http.put('http://localhost:8003/follow/unblock/'+this.id+'/'+id,{responseType: 'text'})
  }
}

