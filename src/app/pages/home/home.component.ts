import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './home.responsive.component.css']
})
export class HomeComponent implements OnInit {

  externalUrl:string = ""

  constructor() { }

  ngOnInit(): void {
    
  }

}
