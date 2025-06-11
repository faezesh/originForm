import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {min} from 'rxjs';

@Component({
  selector: 'app-register-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  registerForm: FormGroup

  constructor(private fb:FormBuilder) {
    this.registerForm= fb.group({
      studentId:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required , Validators.minLength(6)]),
      confirmPassword:new FormControl('',[Validators.required])

    })
  }

  registerUser() {
    if(this.registerForm.valid){
      console.log(this.registerForm.value)


      this.registerForm.reset()
    }

  }
}
