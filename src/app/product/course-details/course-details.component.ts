import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  coursdetails: any;
  reviews: any;
  comments:any;
  hideme= []
  errorComment: string
  errorReview: string
  errorReply: string
  errorMsg: string
  replyLoading: boolean
  commentLoading: boolean
  reviewLoading: boolean
  checkLang
  tester: boolean
  showReplyInput: boolean= true
  newarray: any[]= []
  videos
  url
  textValue = 'initial value'
  pathImage="http://novoduxapi.native-tech.co/Images/StudentImages/"
  teachPath="http://novoduxapi.native-tech.co/Images/TeacherImages/" 
  urlSafe: SafeResourceUrl;
  @ViewChild('replyInput') replyInput:ElementRef; 
  
  @ViewChild('fondovalor') fondovalor:ElementRef;
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
              private toastr: ToastrService,public sanitizer: DomSanitizer) {
                
               }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(parm => {
      let id =parm.id
      this.productService.getCourseDetails(id).subscribe((res: any) => {
        this.coursdetails= res.model
        console.log(this.coursdetails)
      })
      this.productService.getReviews(id).subscribe((res: any) => {
        this.reviews= res.model;
      })
      this.productService.getComments(id).subscribe((res:any) => {
        this.comments= res.model
      })
      localStorage.setItem('courseId',parm.id)

      this.productService.getCourseVideos(id).subscribe((res: any) => {
        this.videos= res.model

      })
    })
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
   
  }
  testClick() {
    // console.log('this.replyInput.nativeElement.value',this.fondovalor.nativeElement.value)
  }
  // comments
  get comment() {
    return this.form.get('comment')
  }
  addcomment() {
   this.commentLoading =true
   let  CourseId= Number(localStorage.getItem('courseId'))
   let  Comment = this.form.value.comment;
   let id= localStorage.getItem("courseId")
   this.productService.addComment(CourseId,Comment).subscribe((res: any) => {
     this.form.reset()
     this.toastr.success('your comment added successfully');
     this.commentLoading= false
     this.productService.getComments(id).subscribe((res:any) => {
      this.comments= res.model
    })
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
  let id= localStorage.getItem("courseId")
  this.productService.addreply(CourseCommentId,ReplyText).subscribe(res => {
     this.toastr.success('your comment added successfully');
     this.replyform.reset()
     this.replyLoading =false
    this.productService.getComments(id).subscribe((res:any) => {
      this.comments= res.model
    })
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

 replayCommentInput(index,id) {
  // this.replyInput.nativeElement?.focus()
  console.log(index,id)
  
  // this.showReplyInput= !this.showReplyInput

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
    console.log(err)
    this.reviewLoading= false
    if (err.error.errors.message === "Authorization has been denied for this request") {
      this.errorReview= "please log in first"
       this.reviewform.reset()
     }
     else if(err.error.errors.message === "Student not enrolled in this course") {
      this.errorReview= "Student not enrolled in this course"
      this.reviewform.reset()
     }
     else {
      this.toastr.error("something error")

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
addToCart() {
  let courseId= Number(localStorage.getItem('courseId')) 
  this.productService.AddToCart(courseId).subscribe(res => {
    this.toastr.success('your course added successfully')
  }, err => {
    if (err.error?.Message === "Authorization has been denied for this request.") {
      //  this.errorMsg= 'please login first'
      this.toastr.error('please login first')
    }
    else if (err.error.errors?.message === "This Course In your cart") {
      this.toastr.error('This Course In your cart')
    }
    else if(err.error.errors?.message ==="This Course In your courses"){
      this.toastr.error('This Course In your courses')
    }
    else {
      this.toastr.error('somthing error')
    }
  })
}
  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl : localStorage.getItem('currentLanguage') === "ar" ? true : false,
  };
}
