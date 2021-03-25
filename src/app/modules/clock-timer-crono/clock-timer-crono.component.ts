import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-timer-crono',
  templateUrl: './clock-timer-crono.component.html',
  styleUrls: ['./clock-timer-crono.component.scss']
})
export class ClockTimerCronoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('running');
  }

}
