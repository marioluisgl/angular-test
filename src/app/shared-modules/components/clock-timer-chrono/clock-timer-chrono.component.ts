import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import { ClockData, EnumTimerMode, IClockData, ICronoData, ITimerData, TimerData } from '../../../models/utils.model';
import { CronoData, ITime } from '../../../models/utils.model';
import { cloneDeep, remove} from 'lodash-es';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-clock-timer-chrono',
  templateUrl: './clock-timer-chrono.component.html',
  styleUrls: ['./clock-timer-chrono.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockTimerChronoComponent implements OnInit, OnDestroy {
  @Input() mode: EnumTimerMode = EnumTimerMode.CLOCK;
  @Input() clockData: IClockData;
  @Input() cronoData: ICronoData;
  @Input() timerData: ITimerData;

  public EnumMode = EnumTimerMode;
  public clock: Observable <Date>;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.clock = timer(0, 1000).pipe(map(t => new Date()), shareReplay(1));
    this.clockData = this.clockData ? this.clockData : new ClockData();
    this.cronoData = this.cronoData ? this.cronoData : new CronoData();
    this.timerData = this.timerData ? this.timerData : new TimerData();
    this._getInfoReloj();
    this.cdr.detectChanges();
  }

  private _getInfoReloj(): void{
    this.clock.subscribe(t => {
      let hours = t.getHours() % 12;
      hours = hours ? hours : 12;
      this.clockData.time = {
        hour: hours,
        minutes: (t.getMinutes() < 10) ? '0' + t.getMinutes() : t.getMinutes().toString(),
        secounds: t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds().toString(),
        ampm: t.getHours() > 11 ? 'PM' : 'AM',
      };
      this.cdr.detectChanges();
    });
  }

  public setMode(mode: EnumTimerMode): void {
    this.mode = mode;
    this.cronoData = this.cronoData ? this.cronoData : new CronoData();
  }

  public initCrono(): void {
    this.cronoData.running = !this.cronoData.running;
    if (this.cronoData.running) {
      this.cronoData.interval = setInterval(() => {
        this.cronoData.time.secounds ++;
        if (this.cronoData.time.secounds === 60) {
          this.cronoData.time.minutes ++;
          this.cronoData.time.secounds = 0;
        }
        if (this.cronoData.time.minutes === 60) {
          this.cronoData.time.hour ++;
          this.cronoData.time.minutes = 0;
        }
        this.cdr.detectChanges();
      }, 1000);
    } else {
      clearInterval(this.cronoData.interval);
    }
  }

  public initTimer(): void {
    this.timerData.running = !this.timerData.running;
    if (!this._isNullTime(this.timerData.time)) {
      if (this.timerData.running) {
        this.timerData.interval = setInterval(() => {
          this._countDownTime();
          this.cdr.detectChanges();
        }, 1000);
      } else {
        clearInterval(this.timerData.interval);
      }
    } else {
      this.timerData.running = !this.timerData.running;
    }
  }

  public reiniciar(): void {
    this.cronoData.running = false;
    clearInterval(this.cronoData.interval);
    this.cronoData = new CronoData();
    this.timerData = new TimerData();
    this.cdr.detectChanges();
  }

  private _isValidTime(time: ITime): boolean {
    if (time.hour >= 0 && time.hour <= 23 && time.minutes >= 0 && time.minutes <= 59 && time.secounds >= 0 && time.secounds <= 59) {
      return true;
    } else {
      return false;
    }
  }

  private _isNullTime(time: ITime): boolean {
    if (time.hour === 0 && time.minutes === 0 && time.secounds === 0) {
      return true;
    } else {
      return false;
    }
  }

  private _countDownTime(): void{
    if (this._isNullTime(this.timerData.time)) {
      this.reiniciar();
    } else {
      if (this.timerData.time.hour > 0 && this.timerData.time.minutes === 0 &&  this.timerData.time.secounds === 0) {
        this.timerData.time.hour --;
        this.timerData.time.minutes = 60;
      }
      if (this.timerData.time.secounds === 0 && this.timerData.time.minutes > 0) {
        this.timerData.time.minutes --;
        this.timerData.time.secounds = 60;
      }
      this.timerData.time.secounds --;
    }
  }

  public getTime(obj: IClockData | ICronoData | ITimerData): void {
    const cloneObj = cloneDeep(obj);
    switch (this.mode) {
      case this.EnumMode.CLOCK:
        this.clockData.listOfTimes.push(cloneObj.time);
        this.cdr.detectChanges();
        break;
      case this.EnumMode.TIMER:
        this.timerData.listOfTimes.push(cloneObj.time);
        this.cdr.detectChanges();
        break;
      case this.EnumMode.CRONO:
        this.cronoData.listOfTimes.push(cloneObj.time);
        this.cdr.detectChanges();
        break;
    }
  }

  public deleteTime(time: ITime): void {
    switch (this.mode) {
      case this.EnumMode.CLOCK:
        this._removeTime(this.clockData.listOfTimes, time);
        this.cdr.detectChanges();
        break;
      case this.EnumMode.TIMER:
        this._removeTime(this.timerData.listOfTimes, time);
        this.cdr.detectChanges();
        break;
      case this.EnumMode.CRONO:
        this._removeTime(this.cronoData.listOfTimes, time);
        this.cdr.detectChanges();
        break;
    }
  }

  private _removeTime(list: any, time: ITime): void {
    remove(list, (i) => i === time );
  }

  ngOnDestroy(): void {
  }

}
