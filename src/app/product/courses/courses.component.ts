import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  widget3: boolean= true
  widget4: boolean= false
  constructor() { 
  
  }

  ngOnInit(): void {
  }
  widget() {
    this.widget4= !this.widget4
    this.widget3= !this.widget3
  }
}
