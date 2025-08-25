import {Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormListContainerComponent} from './formlistcontainer/formlistcontainer.component';
import {ErrorpageComponent} from './errorpage/errorpage.component';

export const routes: Routes = [

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'formStudent', component: FormListContainerComponent},
  {path:'**', component:ErrorpageComponent}

];
