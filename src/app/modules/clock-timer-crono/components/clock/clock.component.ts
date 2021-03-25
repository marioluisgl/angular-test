import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import { ClockData, EnumTimerMode, IClockData, ICronoData, ITimerData, TimerData } from 'src/app/models/utils.model';
import { CronoData, ITime } from '../../../../models/utils.model';
import { cloneDeep, remove} from 'lodash-es';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  public clockData: IClockData;
  public cronoData: ICronoData;
  public timerData: ITimerData;

  constructor(private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
  }
}
