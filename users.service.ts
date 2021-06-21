import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../models/muser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:4000/api/users/';

  constructor(private http: HttpClient) { }

  getuser(): Observable<any>{
    return this.http.get(this.url); 
  }

  saveuser( puser:user): Observable<any>{
    return this.http.post(this.url,puser); 
  }

  editar(_id:string, puser:user): Observable<any>{
    return this.http.put(this.url+puser._id,puser); 
  }


}

