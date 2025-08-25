import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  userName = ''

  isLoginRegister=false

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || sessionStorage.getItem('userName') ||''
    if(localStorage.getItem('isLogin')){
    this.isLoginRegister = localStorage.getItem('isLogin') === 'true'}
    else {
      this.isLoginRegister = sessionStorage.getItem('isLogin') === 'true'
    }

  }

  isLogOut() {
    // localStorage.clear()
    // sessionStorage.clear()
    //دو خط بالا برای اینه که وقتی صفحه رقرش میشه یا خروج رو کاربر میزنه و بک میکنه یا برنامه از اول اجرا میشه
    // دوباره صفحه لاگین همون کاربر قبلی که وارد شده نیاد و دکمه های ورود و ثبت نام بیاد
    //و همینطور چهار خط پایین
    localStorage.removeItem('userName')
    sessionStorage.removeItem('userName')
    localStorage.removeItem('isLogin')
    sessionStorage.removeItem('isLogin')
    this.isLoginRegister=false
    this.userName=''

  }

  // hamburgerMenu=false
  //
  // toggleMenu() {
  //
  //   this.hamburgerMenu = !this.hamburgerMenu
  // }
}


