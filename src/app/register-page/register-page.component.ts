import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-register-page',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  registerForm: FormGroup
  isLogin = false
  password1 = ''
  rePassword = ''
  matchPassword = false
  usersStudent: any[] = []


  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])

    })
  }


  registerUser() {
    if (!this.registerForm.valid) {
      return
    } else {

      this.usersStudent=JSON.parse(localStorage.getItem('usersStudent')||'[]')
      console.log('دانش آموزانی که ثبت نام کردند', this.usersStudent)


      const isDuplicate = this.usersStudent.some(u => u.userName === this.registerForm.value.userName)
      if (isDuplicate) {
        alert('این نام کاربری قبلاً ثبت شده است!')
        return;
      }

        const newUser = {
          userName: this.registerForm.value.userName,
          password: this.registerForm.value.password,
          // confirmPassword: this.registerForm.value.confirmPassword
        }
      this.usersStudent.push(newUser)
        alert('دانش آموز گرامی خوش آمدید')

        localStorage.setItem('usersStudent', JSON.stringify(this.usersStudent))
        localStorage.setItem('userName', newUser.userName)
        localStorage.setItem('isLogin', 'true')
        // this.router.navigate(['/formStudent'])
        this.router.navigate(['/dashboard'])
        this.isLogin = true
      }
    }


  onPassword(e: Event) {

    this.password1 = (<HTMLInputElement>e.target).value
  }


  onRePassword(e: Event) {
    this.rePassword = (<HTMLInputElement>e.target).value

    if (this.password1 !== this.rePassword) {
      this.matchPassword = false
    } else {
      this.matchPassword = true
    }
    // if(this.password===this.rePassword){
    //   this.matchPassword= true
    // }
  }

}
