import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HomeService } from '../services/home.service';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  seachRes: any;
  loading: boolean
  nores= false
  imagePath= "http://novoduxapi.native-tech.co/Images/CourseImages/"
  checkLang
  hideSearchres: boolean
  constructor(private homeService: HomeService, private productService:ProductService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.checkLang= localStorage.getItem('currentLanguage') || 'en'
    if(this.searchForm.value.search== '') {
    }
  }
  
  searchForm = new FormGroup({
    search: new FormControl()
  })

  get search() {
    return this.searchForm.get('search')
  }
  // change(s) {
  //   console.log(s)
  // }
  hideSearch() {
    this.hideSearchres= true
    console.log("test")
  }
  Search() {
    this.loading= true
    // this.hideSearchres= false
    const Word= this.searchForm.value.search
    this.homeService.search(Word).subscribe((res: any) => {
      this.seachRes= res.model
      this.loading= false
     
    }, err => {
      this.loading= false
    })
  }
  addToFav(CourseId) {
    this.productService.addFavourite(CourseId).subscribe( res => {
      this.toastr.success('your course added successfully')
    }, err => {
      this.toastr.error('something error')
    })
   }
}
