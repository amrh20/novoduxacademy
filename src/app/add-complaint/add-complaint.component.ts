import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from '../shared/services/home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.scss']
})
export class AddComplaintComponent implements OnInit {
  commentLoading: boolean
  contactForm= new FormGroup({
    comment: new FormControl ('',Validators.required)
    })
    
  constructor(private homeService:HomeService,private toastr: ToastrService) { 

  }

  ngOnInit(): void {
  }
  get comment() {
    return this.contactForm.get('comment')
  }
  commentType(e) {
    localStorage.setItem('ComplaintOrSuggestionTypeId',e)
   }

  submit() {
  const Message= this.contactForm.value.comment
  const ComplaintOrSuggestionTypeId= localStorage.getItem('ComplaintOrSuggestionTypeId')
  this.commentLoading= true
  this.homeService.addComplaintOrSuggestion(Message,ComplaintOrSuggestionTypeId).subscribe(res => {
    this.toastr.success('your comment added successfully')
    this.contactForm.reset()
    this.commentLoading= false
  }, err => {
    this.toastr.error('something error')
    this.commentLoading= false
  })
  }
}
