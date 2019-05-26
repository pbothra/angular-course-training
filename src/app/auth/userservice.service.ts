import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class UserserviceService {
url='http://localhost:52443/'
  constructor( private http:HttpClient) { }

  createuser(user: User):Observable<User>{
    debugger;
    return this.http.post<User>(this.url+'api/UserMasters', user);
  }
}
