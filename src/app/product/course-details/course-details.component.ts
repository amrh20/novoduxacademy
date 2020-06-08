import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  coursdetails: any;
  reviews: any;
  comments:any;
  errorComment: string
  errorReview: string
  form = new FormGroup({
    comment: new FormControl('', Validators.required)
  });
  replyform = new FormGroup({
   reply: new FormControl('',Validators.required)
  })
  reviewform = new FormGroup({  
    reviewComment: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
  });
  constructor(private activeRoute:ActivatedRoute,
              private productService : ProductService,
              private toastr: ToastrService) { }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(parm => {
      let id =parm.id
      this.productService.getCourseDetails(id).subscribe((res: any) => {
        this.coursdetails= res.model
        console.log("courseDetails", this.coursdetails)
      })
      this.productService.getReviews(id).subscribe((res: any) => {
        this.reviews= res.model;
      })
      this.productService.getComments(id).subscribe((res:any) => {
        this.comments= res.model
        console.log(this.comments)
      })
      localStorage.setItem('courseId',parm.id)
    })
  }
  // comments
  get comment() {
    return this.form.get('comment')
  }
  addcomment() {
   let  CourseId= Number(localStorage.getItem('courseId'))
   let  Comment = this.form.value.comment;
   this.productService.addComment(CourseId,Comment).subscribe(res => {
    this.form.value.comment= " "
     this.toastr.success('your comment added successfully');
   },err => {
    this.toastr.error("something error")
   if (err.error.Message =="Authorization has been denied for this request.") {
    this.errorComment= "please log in first"
    this.form.value.comment= " "
   }
   })
  }
//  replys
 get reply() {
  return this.replyform.get('reply')
 }
 addreply() {
  let  CourseCommentId= localStorage.getItem('courseId')
  let  ReplyText = this.form.value.reply;
  this.productService.addreply(CourseCommentId,ReplyText).subscribe(res => {
    // console.log("doneeeeeeeeeeeeeee", res)
  })
 }
 //  reviews
 get reviewComment() {
  return this.form.get('reviewComment')
}
get rating() {
  return this.form.get('rating')
}
 addReview() {
  const CourseRateValue = this.reviewform.value.rating
  const Comment = this.reviewform.value.reviewComment
  const CourseId= Number(localStorage.getItem('courseId'))
  this.productService.addReviews(CourseRateValue,Comment,CourseId).subscribe(res => {
    this.toastr.success('your review added successfully')
    this.reviewform.reset()
    console.log(res)
  },err => {
    this.toastr.error("something error")
    console.log(err)
    if (err.error.Message =="Authorization has been denied for this request.") {
      this.errorReview= "please log in first"
       this.reviewform.reset()
     }
  })
 }
  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1
  };
}
