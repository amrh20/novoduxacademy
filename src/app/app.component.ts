import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(){
  let code= localStorage.getItem('currentLanguage') || 'en'
    if (code === 'ar') {
     document.documentElement.dir = 'rtl';
   } else {
     document.documentElement.dir = 'ltr';
   }
 }
}
