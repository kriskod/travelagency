import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { UserStructure } from '../models/user.model';
import { Observable } from 'rxjs/index';
import { Role } from '../models/role.model';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';
import { FireDbUsersService } from './fire-db-users.service';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(private userService: UserService, private fireAuth: AngularFireAuth, private userDbService: FireDbUsersService) { }

  users: UserStructure[] 
  private activeUser: UserStructure;
  private admin = false;

  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  login({ email, password }: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  };

  register({ email, password }: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

  getCurrentUser(){
    this.activeUser = this.users.find(user => 
      user.email == this.user.email
       )
       return this.activeUser
    }

  isAdmin(user: UserStructure){
    if(user.role == Role.Admin)
    return this.admin = true;
  }
}

