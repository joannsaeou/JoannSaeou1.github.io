import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  year: number = Date.now();


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
