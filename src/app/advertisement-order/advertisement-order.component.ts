import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertisement-order',
  templateUrl: './advertisement-order.component.html',
  styleUrls: ['./advertisement-order.component.scss']
})
export class AdvertisementOrderComponent implements OnInit {
  orders: any;
  IsLoading: boolean;
  checkLang
  constructor(private homeSerive: HomeService,private router:Router) { }

  ngOnInit(): void {
    this.IsLoading= true;
    this.checkLang = localStorage.getItem('currentLanguage') || 'en'

    this.homeSerive.getAdvertisementOrder().subscribe((res: any) => {
      this.orders = res.model
      this.IsLoading= false;
      console.log(this.orders)
    })
  }
  logout() {
    localStorage.removeItem('authToken')
    this.router.navigate(['home'])
  }
}
