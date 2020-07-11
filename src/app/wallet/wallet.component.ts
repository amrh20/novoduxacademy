import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('authToken')
    this.router.navigate(['home'])
  }
}
