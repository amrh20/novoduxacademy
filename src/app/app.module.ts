import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AccountsModule } from './accounts/accounts.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BarRatingModule } from "ngx-bar-rating";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { AdvertisementsDetailsComponent } from './advertisements-details/advertisements-details.component';
import { AdvertisementOrderComponent } from './advertisement-order/advertisement-order.component';
import { FAQComponent } from './faq/faq.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NotificationComponent } from './notification/notification.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { ProfileComponent } from './profile/profile.component'
@NgModule({
  declarations: [
    AppComponent,
    AddComplaintComponent,
    AdvertisementsDetailsComponent,
    AdvertisementOrderComponent,
    FAQComponent,
    NotificationComponent,
    StudentCoursesComponent,
    ProfileComponent
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
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    })
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}