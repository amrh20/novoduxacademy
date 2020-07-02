import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { accountsRoutingModule } from './accounts-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerfiyComponent } from './verfiy/verfiy.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, VerfiyComponent],
  imports: [
    CommonModule,
    accountsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AccountsModule { }
