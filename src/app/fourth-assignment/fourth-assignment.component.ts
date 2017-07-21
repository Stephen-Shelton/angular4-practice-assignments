import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-assignment',
  templateUrl: './fourth-assignment.component.html',
  styleUrls: ['./fourth-assignment.component.css']
})
export class FourthAssignmentComponent implements OnInit {
  evens = [];
  odds = [];
  constructor() { }

  ngOnInit() {
  }

  onTimerStarted(second: number) {
    (second % 2 === 0) ? this.evens.push(second) : this.odds.push(second);
  }
}
