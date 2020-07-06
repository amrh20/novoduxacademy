import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

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
