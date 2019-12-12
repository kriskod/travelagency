import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

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
    if(this.loginForm.valid){
      return;
    }
    let email = this.f["email"].value
    let password = this.f["password"].value
    this.authService.login({ email, password }).then(
      auth => {
        console.log(auth)
        this.router.navigateByUrl('/app')
      }
    )
      .catch((err) =>
        console.log(err))
  }

}