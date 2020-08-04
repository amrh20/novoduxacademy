import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  amounts;
  constructor(private router:Router,private productService: ProductService) { }

  ngOnInit(): void {
      this.productService.getAllStudentTransactions().subscribe((res: any) => {
        console.log("resssss",res)
        this.amounts= res.model
      })
  }
  logout() {
    localStorage.removeItem('authToken')
    this.router.navigate(['home'])
  }

}
