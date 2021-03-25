import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { IClockData, ICronoData, ITimerData } from 'src/app/models/utils.model';
import { HandleAuthService } from 'src/app/services/handle-auth.service';
import { HandleSharedService } from 'src/app/services/handle-shared.service';

@UntilDestroy()
@Component({
  selector: 'app-modal-usage-counter',
  templateUrl: './modal-usage-counter.component.html',
  styleUrls: ['./modal-usage-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalUsageCounterComponent implements OnInit, OnDestroy {
  public clockData: IClockData;
  public cronoData: ICronoData;
  public timerData: ITimerData;

  constructor(public dialogRef: MatDialogRef<ModalUsageCounterComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private translate: TranslateService,
              private handleAuth: HandleAuthService,
              private handleShared: HandleSharedService,
              private router: Router,
              private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private fb: FormBuilder) { }


  ngOnInit(): void {
  }

  public onClose(): void {
    this.dialogRef.close();
  }


  ngOnDestroy(): void {
  }

}
