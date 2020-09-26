import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/shared/services/home.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent implements OnInit {
  comments: any;
  ClassId: any;
  constructor(private activeRoute: ActivatedRoute, private homeService: HomeService, private productService: ProductService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parm => {
      let id =parm.id
      localStorage.setItem('classId',id)
      this.homeService.getCourseDetails(id).subscribe((res: any) => {
        console.log(res)
      })

      this.productService.getComments(id).subscribe((res:any) => {
        this.comments= res.model
      })

    })
    this.ClassId= localStorage.getItem('classId')
  }
   
}
