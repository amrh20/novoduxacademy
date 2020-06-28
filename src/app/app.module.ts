import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AccountsModule } from './accounts/accounts.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BarRatingModule } from "ngx-bar-rating";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { AdvertisementsDetailsComponent } from './advertisements-details/advertisements-details.component';
import { AdvertisementOrderComponent } from './advertisement-order/advertisement-order.component';
import { FAQComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComplaintComponent,
    AdvertisementsDetailsComponent,
    AdvertisementOrderComponent,
    FAQComponent
  ],
  imports: [
    SharedModule,
    AccountsModule,
    HomeModule,
    AppRoutingModule,
    ProductModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BarRatingModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
