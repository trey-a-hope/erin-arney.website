import { Component, OnInit } from '@angular/core';

declare var require: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  one = require("../../../../img/home/1.jpg");
  two = require("../../../../img/home/2.jpg");
  three = require("../../../../img/home/3.jpg");

  constructor() { }

  ngOnInit() {
  }

}
