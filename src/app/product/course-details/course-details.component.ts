import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  coursdetails: any;
  reviews: any;
  comments:any;
  form = new FormGroup({
    comment: new FormControl('', Validators.required)
  });
  replyform = new FormGroup({
   reply: new FormControl('',Validators.required)
  })
  constructor(private activeRoute:ActivatedRoute,
              private productService : ProductService) { }

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
  // add comment
  get comment() {
    return this.form.get('comment')
  }
  addcomment() {
   let  CourseId= localStorage.getItem('courseId')
   let  Comment = this.form.value.comment;
   this.productService.addComment(CourseId,Comment).subscribe(res => {
     console.log("doneeeeeeeeeeeeeee", res)
   })
  }
//  add reply

 get reply() {
  return this.replyform.get('reply')
 }

 addreply() {
  let  CourseCommentId= localStorage.getItem('courseId')
  let  ReplyText = this.form.value.reply;
  this.productService.addreply(CourseCommentId,ReplyText).subscribe(res => {
    console.log("doneeeeeeeeeeeeeee", res)
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
