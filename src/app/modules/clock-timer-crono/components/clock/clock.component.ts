import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import { EnumTimerMode, IClockData, ICronoData, ITimerData, TimerData } from 'src/app/models/utils.model';
import { CronoData, ITime } from '../../../../models/utils.model';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  @Input() mode: EnumTimerMode = EnumTimerMode.CLOCK;
  @Input() clockData: IClockData;
  @Input() cronoData: ICronoData;
  @Input() timerData: ITimerData;

  public EnumMode = EnumTimerMode;
  public clock: Observable <Date>;
  public time: any;

  constructor(private cdr: ChangeDetectorRef) {
    this.clock = timer(0, 1000).pipe(map(t => new Date()), shareReplay(1));
    this.cronoData = new CronoData();
    this.timerData = this.timerData ? this.timerData : new TimerData();
  }

  ngOnInit(): void {
    this._getInfoReloj();
  }

  private _getInfoReloj(): void{
    this.clock.subscribe(t => {
      let hours = t.getHours() % 12;
      hours = hours ? hours : 12;
      this.clockData = {
        hour: hours,
        minutes: (t.getMinutes() < 10) ? '0' + t.getMinutes() : t.getMinutes().toString(),
        secounds: t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds().toString(),
        ampm: t.getHours() > 11 ? 'PM' : 'AM',
      };
    });
  }

  public setMode(mode: EnumTimerMode): void {
    this.mode = mode;
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

}
