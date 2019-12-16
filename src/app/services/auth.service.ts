import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { UserStructure } from '../models/user.model';
import { Observable } from 'rxjs/index';
import { Role } from '../models/role.model';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(private userService: UserService, private fireAuth: AngularFireAuth) { }

  private activeUser: UserStructure;

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

  get userRole() {
    if (!this.activeUser) {
      return this.userService.getUserEmail(this.user.email).subscribe(user => user.role)
    }
    else {
      return this.activeUser.role
    }
  }

  currentUser() {
    if(!this.activeUser){
      return this.userService.getUserEmail(this.user.email)
    }
    else {
      return this.activeUser
    }
  }
}

