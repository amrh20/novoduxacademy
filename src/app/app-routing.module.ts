import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { AdvertisementsDetailsComponent } from './advertisements-details/advertisements-details.component';
import { AdvertisementOrderComponent } from './advertisement-order/advertisement-order.component';
import { FAQComponent } from './faq/faq.component';
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
  path: 'ad',
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