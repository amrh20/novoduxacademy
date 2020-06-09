import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logged: boolean
  constructor(private homeService:HomeService) { }

public featureConfig: any= {
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
}
onclick() {
  console.log("tets")
}
  ngOnInit(): void {
    
  }
 loggedIn() {
   if(localStorage.getItem('authToken')) {
     return true
   }
 }
 logout() {
   localStorage.removeItem('authToken')
 }
}
