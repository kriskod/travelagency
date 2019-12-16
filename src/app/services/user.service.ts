import { Injectable } from '@angular/core';
import { UserStructure } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'api/users'

  constructor(private httpClient: HttpClient) { }

  getUser(id): Observable<UserStructure>{
    return this.httpClient.get<UserStructure>(`/api/users/${id}`);
  }

  getUsers():Observable<UserStructure[]>{
    return this.httpClient.get<UserStructure[]>(`/api/users`);
  }

  getUserEmail(email: string): Observable<UserStructure>{
    return this.httpClient.get<UserStructure>(`${this.apiUrl}/email/${email}`);
  }

  deleteUser(user: UserStructure) {
    let id = user._id;
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
  
  async postUser(user: UserStructure) {
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
