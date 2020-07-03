import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VerfiyComponent } from './verfiy/verfiy.component';
import { ForgetComponent } from './forget/forget.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'verfiy',
    component: VerfiyComponent
  },
  {
    path: 'forget',
    component: ForgetComponent
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class accountsRoutingModule { }