import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { AdvertisementsDetailsComponent } from './advertisements-details/advertisements-details.component';
import { AdvertisementOrderComponent } from './advertisement-order/advertisement-order.component';
import { FAQComponent } from './faq/faq.component';
import { NotificationComponent } from './notification/notification.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
  },
  {
   path: '', redirectTo:'home', pathMatch: 'full'
 },
 {
  path: 'contact-us',
  component: AddComplaintComponent
 },
 {
  path: 'ad/:id',
  component: AdvertisementsDetailsComponent
 },
 {
  path: 'FAQ',
  component: FAQComponent
 },
 {
  path: 'ad-order',
  component: AdvertisementOrderComponent
 },
 {
  path: 'notification',
  component: NotificationComponent
 },
 {
  path: 'myCourses',
  component: StudentCoursesComponent
 },
 {
   path: 'profile',
   component: ProfileComponent
 },
 {
  path: 'wallet',
  component: WalletComponent
},
{
 path: 'edit-profile',
 component: EditProfileComponent
},
 {
  path: 'product',
  children: [
   {
    path: '',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
   }
  ]
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }