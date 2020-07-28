import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(public router:Router){
  let code= localStorage.getItem('currentLanguage') || 'en'
    if (code === 'ar') {
     document.documentElement.dir = 'rtl';
   } else {
     document.documentElement.dir = 'ltr';
   }
 }
}
