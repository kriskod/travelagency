import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FireDbUsersService } from '../services/fire-db-users.service';
import { UserStructure } from '../models/user.model'
import { Role } from '../models/role.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private fireDbUserService: FireDbUsersService
  ) { }

  registerForm: FormGroup
  submitted = false;

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      acceptTerms: new FormControl([false, Validators.requiredTrue])
    },
      {
        validators: this.checkPasswords,
      })
  }

  checkPasswords(group: FormGroup) {
    let password = group.get('password').value;
    let confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : { notSame: true }
  }

  get f() {
    return this.registerForm.controls
  }

  onRegistered() {
    this.submitted = true
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.register({ email: this.f.email.value, password: this.f.password.value }).then(
      resolve => {
        console.log(resolve)
        this.fireDbUserService.addUser({ _id: "", username: this.f.name.value, email: this.f.email.value, role: Role.User })
        this.router.navigate['/logowanie']
      })
      .catch((err) =>
        window.alert(err))
  }
}



