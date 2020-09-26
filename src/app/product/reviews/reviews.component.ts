import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviewLoading: boolean
  reviews: any
  checkLang
  errorReview
  reviewform = new FormGroup({
    reviewComment: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
  });
  constructor(private productService: ProductService, private toastr: ToastrService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parm => {
      let id = parm.id
      this.productService.getReviews(id).subscribe((res: any) => {
        this.reviews = res.model;
      })
    })
    this.checkLang = localStorage.getItem('currentLanguage') || 'en'
  }
  addReview() {
    this.reviewLoading = true
    const CourseRateValue = this.reviewform.value.rating
    const Comment = this.reviewform.value.reviewComment
    const CourseId = Number(localStorage.getItem('courseId'))
    this.productService.addReviews(CourseRateValue, Comment, CourseId).subscribe(res => {
      this.toastr.success('your review added successfully')
      this.reviewform.reset()
      window.location.reload();
      this.reviewLoading = false
    }, err => {
      console.log(err)
      this.reviewLoading = false
      if (err.error.errors.message === "Authorization has been denied for this request") {
        this.errorReview = "please log in first"
        this.reviewform.reset()
      }
      else if (err.error.errors.message === "Student not enrolled in this course") {
        this.errorReview = "Student not enrolled in this course"
        this.reviewform.reset()
      }
      else {
        this.toastr.error("something error")

      }
    })
  }
}
