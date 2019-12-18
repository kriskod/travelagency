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
  isLoaded = false;


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

  saveCurrentUserData(userEmail: string) {
    this.activeUser = this.users.find(user =>
      user.email == userEmail
    )
  }

  isAdmin() {
    return (this.activeUser.role == Role.Admin)
  }

  // isAdmin(isTrue) {
  //   isTrue = (this.activeUser.role == Role.Admin)
  //   return isTrue
  // }

  // showActiveUser() {
  //   let mail = this.user.email;
  //   this.userDbService.getUserByMail(mail).subscribe(users => {
  //     this.activeUser = users[0];
  //     this.isAdmin(this.activeUser.role == Role.Admin)
  //     this.isLoaded = true;
  //   });
  // }
}

