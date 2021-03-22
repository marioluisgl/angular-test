import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';


@UntilDestroy()
@Component({
  selector: 'app-modal-usage-wizard',
  templateUrl: './modal-usage-wizard.component.html',
  styleUrls: ['./modal-usage-wizard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalUsageWizardComponent implements OnInit, OnDestroy {

  constructor(public dialogRef: MatDialogRef<ModalUsageWizardComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }


  ngOnInit(): void {
  }

  public createNewProblem(): void {

  }

  public onClose(data?: any): void {
    this.dialogRef.close(data);
  }

  ngOnDestroy(): void {
  }

  public onNext($event: string): void {
  }

  public onPrevious($event: string): void {
  }
}
