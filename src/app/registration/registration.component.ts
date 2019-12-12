import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  registerForm: FormGroup

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      confirmPassword: new FormControl('',[Validators.required])
    },
      {
        validators: this.checkPasswords
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

  onRegistered(){
    if(this.registerForm.valid){
    this.authService.register({email: this.f.email.value, password: this.f.password.value}).then(
      resolve => 
        this.router.navigate[''])
      }else {
        window.alert('Hasła nie są takie same!')
      }
  }
}

