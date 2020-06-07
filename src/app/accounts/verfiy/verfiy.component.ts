import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verfiy',
  templateUrl: './verfiy.component.html',
  styleUrls: ['./verfiy.component.scss']
})
export class VerfiyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  verify() {
    this.router.navigate(['/login'])
  }
}
