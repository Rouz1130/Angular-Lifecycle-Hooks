import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { "AppComponent:Constructor" };

  ngOnInit() {
    console.log("AppComponent:OnInit");
  }
}
