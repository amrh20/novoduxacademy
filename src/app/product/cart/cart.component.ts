import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { FormControlName, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  Courses
  checkLang
  imagePath= "http://novoduxapi.native-tech.co/Images/CourseImages/"
  totalPrice
  loading: boolean
  overlay: boolean
  invalidConpou: String= ''
  couponLoading: boolean
  couponForm= new FormGroup({
    coupon: new FormControl('',Validators.required)
  })
  constructor(private productService: ProductService,private toasterService: ToastrService) { }

  ngOnInit(): void {
    this.loading= true
  
    this.productService.getMyCart().subscribe((res: any)=> {
      this.loading= false
      this.Courses= res.model.CartItems
      this.totalPrice= res.model.TotalPrice
    })
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
  }
  deleteItem(CourseId) {
    this.overlay= true
    this.productService.deleteFromCart(CourseId).subscribe(res => {
      this.overlay= false
      this.toasterService.success('deleted succesfully')
      this.productService.getMyCart().subscribe((res: any)=> {
        this.loading= false
        this.Courses= res.model.CartItems
        this.totalPrice= res.model.TotalPrice
      })
    }, err=> {
        this.toasterService.error('something error')
        this.overlay= false
    })
  }
  get coupon() {
   return this.couponForm.value.coupon
  }
  applyCoupon() {
    const PromoCode= this.couponForm.value.coupon
    this.couponLoading= true
    this.productService.applyPromoCode(PromoCode).subscribe(res=> {
      this.toasterService.success("your coupon applied successfully")
      this.productService.getMyCart().subscribe((res: any)=> {
        this.couponLoading= false
        this.loading= false
        this.Courses= res.model.CartItems
        this.totalPrice= res.model.TotalPrice
        this.couponForm.reset()
        this.invalidConpou= ''
      })
    },err => {
      this.couponLoading= false
      if(err.error.errors.message==="Result_Invalide_PromoCode") {
        this.invalidConpou= "Invalide PromoCode"
      }
      this.toasterService.error('something error')
    })
  }
}
