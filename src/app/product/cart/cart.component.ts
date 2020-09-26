import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { FormControlName, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  Courses
  checkLang
  couponValue
  imagePath= "http://novoduxadmin.native-tech.co/Images/CourseImages/"
  totalPrice
  loading: boolean
  overlay: boolean
  CoursesPrice
  invalidConpou: String= ''
  couponLoading: boolean
  couponForm= new FormGroup({
    coupon: new FormControl('',Validators.required)
  })
  checkoutForm= new FormGroup({
    payment: new FormControl('',Validators.required)
  })
  constructor(private productService: ProductService,
    private toasterService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.loading= true
  
    this.productService.getMyCart().subscribe((res: any)=> {
      this.loading= false
      this.Courses= res.model.CartItems
      this.totalPrice= res.model.TotalPrice
      this.couponValue= res?.model?.PromoCodeValue
      this.CoursesPrice= res?.model.CoursesPrice
      console.log(this.couponValue)
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
    this.productService.applyPromoCode(PromoCode).subscribe((res: any)=> {
      this.toasterService.success("your coupon applied successfully")
      this.productService.getMyCart().subscribe((res: any)=> {
        this.couponLoading= false
        this.loading= false
        this.Courses= res.model.CartItems
        this.totalPrice= res.model.TotalPrice
        this.couponValue= res?.model?.PromoCodeValue
        this.CoursesPrice= res?.model.CoursesPrice

        this.couponForm.reset()
        this.invalidConpou= ''
      })
    },err => {
      this.couponLoading= false
      if(err.error.errors.message==="Result_Invalide_PromoCode") {
        this.invalidConpou= "Invalide PromoCode"
      }
    })
  }
  get payment() {
    return this.checkoutForm.value.payment
   }
  checkout() {
    const FromWallet= this.checkoutForm.value.payment
    this.productService.checkout(FromWallet).subscribe(res=> {
      this.router.navigate(['/success'])
    },err =>{
      if(err.error.errors.message==="Your money in Rewards not enough") {
        this.toasterService.error('Your money in Rewards not enough')
      }
      else if (err.error.errors.message==="no money in wallet please charge your wallet") {
        this.toasterService.error('no money in wallet please charge your wallet')
      }
    })
  }
}
