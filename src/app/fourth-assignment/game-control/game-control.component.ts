import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() listener = new EventEmitter<number>();
  second = 0;
  interval;
  gameOn = false;
  constructor() { }

  ngOnInit() {
  }
  
  startTimer() {
    if (!this.gameOn) {
      this.gameOn = true;
      this.interval = setInterval(() => {
        this.second += 1;
        this.listener.emit(this.second);
      }, 1000);
    }
  }

  pauseTimer() {
    if (this.gameOn) {
      this.gameOn = false;
      clearInterval(this.interval);
    }
  }
}
