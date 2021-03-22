import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { EnumTimerType } from '../../../models/utils.model';

@UntilDestroy()
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TimerComponent implements OnInit, OnDestroy{
  @Input() counter: string;
  @Input() principalDate: any;
  @Input() showDays: boolean;
  @Input() showText: boolean;
  @Input() timerType: EnumTimerType;
  @Input() textExpired = 'Labels.closed';
  public type = EnumTimerType;
  constructor(private cdr: ChangeDetectorRef,
              private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.timerType ===  this.type.DOWN ? this._initCountdown() : this._initCountUp();
  }

  ngOnDestroy(): void {
  }

  private _initCountdown(): void {
    let countDownDate = new Date(this.principalDate).getTime() - new Date().getTime();
    const time = setInterval(() => {
      countDownDate -= 1000;
      const days = Math.floor(countDownDate / 86400000);
      const hours = Math.floor((countDownDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((countDownDate % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((countDownDate % (1000 * 60)) / 1000);

      if (!this.showDays) {
        this.counter = hours + 'h '
          + minutes + 'm ' + seconds + 's ';
      } else {
        this.counter = days + 'd ' + hours + 'h '
          + minutes + 'm ' + seconds + 's ';
      }
      this.cdr.markForCheck();
      if (countDownDate < 0) {
        const now = new Date();
        const date = new Date(this.principalDate);
        if (now.getTime() > date.getTime()){
          this.showText ? this.counter = this.translate.instant(this.textExpired) : this.counter = '';
        }
        else{
          this.showText ? this.counter = this.translate.instant(this.textExpired) : this.counter = '';
        }
        clearInterval(time);
      }
    }, 1000);
  }

  private _initCountUp(): void {
    let countUpDate = new Date().getTime() - new Date(this.principalDate).getTime();
    const time = setInterval(() => {
      countUpDate += 1000;
      const days = Math.floor(countUpDate / 86400000);
      const hours = Math.floor((countUpDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((countUpDate % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((countUpDate % (1000 * 60)) / 1000);

      if (!this.showDays) {
        this.counter = hours + 'h '
          + minutes + 'm ' + seconds + 's ';
      } else {
        this.counter = days + 'd ' + hours + 'h '
          + minutes + 'm ' + seconds + 's ';
      }
      this.cdr.markForCheck();
    }, 1000);
  }
}
