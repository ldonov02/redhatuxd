import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import {USERS} from './temp-users';

//import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

//	private usersUrl = 'http://jsonplaceholder.typicode.com/users';

	getUsers(): Observable<User[]> {
//	  return this.http.get<User[]>(this.usersUrl);
	  return of(USERS);
	}


	getUser(id: number): Observable<User> {
//	  const url = `${this.usersUrl}/${id}`;
//	  return this.http.get<User>(url);
	  return of(USERS.find(user => user.id === id));
	}
//	constructor(private http: HttpClient) { }
	constructor() { }


}
