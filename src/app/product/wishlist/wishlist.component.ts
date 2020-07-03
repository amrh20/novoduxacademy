import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  myFavorites: any;
  loaded: boolean
  overlayDelete: boolean
  checkLang
  imagePath= "http://novoduxapi.native-tech.co/Images/CourseImages/";
  constructor(private productService:ProductService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.productService.getMyFavorites().subscribe((res: any) => {
      this.myFavorites =res.model
      this.loaded =false
    })
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
  }
  deleteitem(CourseId,index) {
   this.overlayDelete= true
   this.productService.deleteCourseFromFavourite(CourseId).subscribe(res => {
     this.myFavorites.splice(index,1)
    this.toastr.success('your item deleted succssfully')
    this.overlayDelete= false
   }, err => {
     this.toastr.error('something error')
     this.overlayDelete= false
   })
  }
}
