import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notifications;
  checkLang;
  loading: boolean
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.loading= true
    this.homeService.notifcation().subscribe((res: any) => {
      this.notifications= res.model
      this.loading= false
    })
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
  }


}
