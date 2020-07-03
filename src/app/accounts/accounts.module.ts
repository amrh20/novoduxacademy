import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { accountsRoutingModule } from './accounts-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerfiyComponent } from './verfiy/verfiy.component';
import { SharedModule } from '../shared/shared.module';
import { ForgetComponent } from './forget/forget.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, VerfiyComponent, ForgetComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    accountsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AccountsModule { }
