import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './product/cart/cart.component';

const routes: Routes = [
  
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {
  path: 'home',
  component: HomeComponent
  },
 {
  path: 'product',
  loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }