import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: string;
  name: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
