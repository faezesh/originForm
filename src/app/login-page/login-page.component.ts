import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  loginForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      studentId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      rememberMe: new FormControl('')
    })
  }

  loginUser() {
    if (this.loginForm.valid){
      console.log(this.loginForm.value)



      this.loginForm.reset()
    }
  }
}
