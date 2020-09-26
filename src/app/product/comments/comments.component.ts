import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
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
  urlSafe: SafeResourceUrl;
  @ViewChild('replyInput') replyInput:ElementRef; 
  
  @ViewChild('fondovalor') fondovalor:ElementRef; 
  form = new FormGroup({
    comment: new FormControl('', Validators.required)
  });
  replyform = new FormGroup({
   reply: new FormControl('',Validators.required)
  })
  constructor(private productService : ProductService,
    private toastr: ToastrService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parm => {
      let id =parm.id
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
selectOption(e) {
  localStorage.setItem('CourseCommentId',e)
 }
}
