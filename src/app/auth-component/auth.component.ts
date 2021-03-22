import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalUsageWizardComponent } from '../shared-modules/modals/modal-usage-wizard/modal-usage-wizard.component';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  public title = '';
  constructor(private matDialog: MatDialog,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.title = 'client';
  }

  public openWizardModal(): void {
    const modal = this.matDialog.open(ModalUsageWizardComponent, {
      panelClass: 'modal-data',
      width: '65vW',
      disableClose: true,
      hasBackdrop: false,
      data: {}
    });
    modal.afterClosed().pipe(untilDestroyed(this)).subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.cdr.detectChanges();
      }
    });
  }



}
