import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'app-advertisement-order',
  templateUrl: './advertisement-order.component.html',
  styleUrls: ['./advertisement-order.component.scss']
})
export class AdvertisementOrderComponent implements OnInit {
  orders: any;
  constructor(private homeSerive: HomeService) { }

  ngOnInit(): void {
    this.homeSerive.getAdvertisementOrder().subscribe((res: any) => {
      this.orders = res.model
      console.log(this.orders)
    })
  }

}
