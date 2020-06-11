import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  myFavorites;
  constructor(private productService:ProductService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.productService.getMyFavorites().subscribe((res: any) => {
      this.myFavorites =res.model
    })
  }
  deleteitem(CourseId,index) {
   this.productService.deleteCourseFromFavourite(CourseId).subscribe(res => {
     this.myFavorites.splice(index,1)
    this.toastr.success('your item deleted succssfully')
   }, err => {
     this.toastr.error('something error')
   })
  }
}
