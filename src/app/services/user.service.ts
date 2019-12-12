import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'api/users'

  constructor(private httpClient: HttpClient) { }

  getUser(id): Observable<User>{
    return this.httpClient.get<User>(`/api/users/${id}`);
  }

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(`/api/users`);
  }
  
  async postUser(user: User) {
    try {
      const data = await this.httpClient.post(`/api/users`, user)
        .toPromise();
      return data;
    }
    catch (err) {
      return console.log('Użytkownik nie został dodany', err);
    }
  }
}
