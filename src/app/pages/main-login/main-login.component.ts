import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.sass']
})
export class MainLoginComponent implements OnInit {
  isSchool = true;
  constructor() { }

  ngOnInit() {
  }

  toSchool() {
    this.isSchool = true;
  }
  notSchool() {
    this.isSchool = false;
  }
}
