import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styleUrls: ['./third-assignment.component.css']
})
export class ThirdAssignmentComponent implements OnInit {
  textStatus: boolean = false;
  clicks = 0;
  clickLogs = [];

  constructor() { 
    // this.textStatus = false;
  }

  ngOnInit() {
  }

  addText() {
    this.clickLogs.push(++this.clicks);
    console.log(this.clickLogs);
  }
}
