import {Component, NgModule} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  loginForm: FormGroup
  isLogin= false
  // userName : string = ''
  usersStudent :any[]=[]


  constructor(private fb: FormBuilder, private router:Router,private modal:NgModule) {
    this.loginForm = fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      rememberMe: new FormControl(false)
    })
  }

  loginUser() {
    if (!this.loginForm.valid){
      return
    }

    this.usersStudent=JSON.parse(localStorage.getItem('usersStudent')||'[]')
    console.log('دانش آموزانی که وارد شده اند',this.usersStudent)

    const user = this.usersStudent.find(u=>u.userName===this.loginForm.value.userName)
    if(!user){
      alert('دانش‌آموزی با این نام کاربری ثبت ‌نام نکرده است.')
      return;
    }

    if(user.password !== this.loginForm.value.password){
      alert('رمز عبور اشتباه است.')
      return;
    }

    alert('دانش آموز گرامی خوش آمدید ')
    // const {studentId ,password, rememberMe} = this.loginForm.value
    // this.studentId= studentId

    if(this.loginForm.value.rememberMe){
      localStorage.setItem('userName', this.loginForm.value.userName)
      localStorage.setItem('isLogin','true')
    }else {
      sessionStorage.setItem('userName', this.loginForm.value.userName)
      sessionStorage.setItem('isLogin','true')
    }

    // this.router.navigate(['/formStudent'])
    this.router.navigate(['/dashboard'])

    this.isLogin= true
  }

  // isLogOut() {
  //   localStorage.removeItem('userName')
  //   sessionStorage.removeItem('userName')
  //   this.isLogin=false
  //   this.studentId=''
  //   this.loginForm.reset()
  // }
}
