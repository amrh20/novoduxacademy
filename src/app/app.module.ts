import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AccountsModule } from './accounts/accounts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
