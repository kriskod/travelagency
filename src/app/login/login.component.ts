import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FireDbUsersService } from '../services/fire-db-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private userService: FireDbUsersService) { }

  loginForm: FormGroup

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  get f() {
    return this.loginForm.controls
  }

  logIn() {
    if (this.loginForm.invalid) {
      return;
    }
    let email = this.f["email"].value
    let password = this.f["password"].value
    this.authService.login({ email, password }).then(
      auth => {
        this.router.navigateByUrl('/app')
      }
    )
      .catch((err) =>
        console.log(err))
  }

}
