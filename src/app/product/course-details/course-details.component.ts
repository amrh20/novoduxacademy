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
  errorReply: string
  errorMsg: string
  replyLoading: boolean
  commentLoading: boolean
  reviewLoading: boolean
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
      })
      this.productService.getReviews(id).subscribe((res: any) => {
        this.reviews= res.model;
      })
      this.productService.getComments(id).subscribe((res:any) => {
        this.comments= res.model
      })
      localStorage.setItem('courseId',parm.id)
    })
  }
  // comments
  get comment() {
    return this.form.get('comment')
  }
  addcomment() {
   this.commentLoading =true
   let  CourseId= Number(localStorage.getItem('courseId'))
   let  Comment = this.form.value.comment;
   this.productService.addComment(CourseId,Comment).subscribe((res: any) => {
     this.form.reset()
     this.toastr.success('your comment added successfully');
     this.commentLoading= false
   },err => {
    this.toastr.error("something error")
    this.commentLoading= false
   if (err.error.Message =="Authorization has been denied for this request.") {
    this.errorComment= "please log in first"
    this.form.reset()
   }
   })
  }
//  replys
 get reply() {
  return this.replyform.get('reply')
 }
 addreply() {
  this.replyLoading= true
  let  CourseCommentId= Number(localStorage.getItem('CourseCommentId'))
  let  ReplyText = this.replyform.value.reply;
  this.productService.addreply(CourseCommentId,ReplyText).subscribe(res => {
     this.toastr.success('your comment added successfully');
     this.replyform.reset()
     this.replyLoading =false
    //  this.productService.getComments().subscribe()
  },err => {
    this.toastr.error("something error")
    this.replyLoading =false
    if (err?.error?.errors?.message == "Invalid Parametrs") {
     this.errorReply= "please select the comment first that you want to reply for"
    }
    if (err?.error?.Message=="Authorization has been denied for this request.") {
      this.errorReply= "please login first"
    }
    this.replyform.reset()
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
  this.reviewLoading= true
  const CourseRateValue = this.reviewform.value.rating
  const Comment = this.reviewform.value.reviewComment
  const CourseId= Number(localStorage.getItem('courseId'))
  this.productService.addReviews(CourseRateValue,Comment,CourseId).subscribe(res => {
    this.toastr.success('your review added successfully')
    this.reviewform.reset()
    window.location.reload();
    this.reviewLoading= false
  },err => {
    this.toastr.error("something error")
    this.reviewLoading= false
    if (err.error.Message =="Authorization has been denied for this request.") {
      this.errorReview= "please log in first"
       this.reviewform.reset()
     }
  })
 }
 selectOption(e) {
  localStorage.setItem('CourseCommentId',e)
 }
// add to fav 
addToFav() {
  let courseId= Number(localStorage.getItem('courseId')) 
  this.productService.addFavourite(courseId).subscribe(res => {
    this.toastr.success('your course added successfully')
  },err => {
    this.toastr.error('something errorr')
    if (err.error.Message == "Authorization has been denied for this request.") {
      this.errorMsg = "please login first"
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
