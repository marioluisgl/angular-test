import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalUsageWizardComponent } from '../shared-modules/modals/modal-usage-wizard/modal-usage-wizard.component';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import { IUserModel } from '../models/user.model';
import { HandleAuthService } from '../services/handle-services.service';
import { EnumTimerType } from '../models/utils.model';

@UntilDestroy()
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  public userData: {user: IUserModel};
  public timerType = EnumTimerType;
  public title = '';
  constructor(private matDialog: MatDialog,
              private cdr: ChangeDetectorRef,
              private handleAuth: HandleAuthService) { }

  ngOnInit(): void {
    this.title = 'client';
    this.userData = this.handleAuth.dataLogged;
  }

  public openWizardModal(): void {
    const modal = this.matDialog.open(ModalUsageWizardComponent, {
      panelClass: 'modal-data',
      width: '40vW',
      disableClose: true,
      hasBackdrop: false,
      data: {}
    });
    modal.afterClosed().pipe(untilDestroyed(this)).subscribe((response: any) => {
      if (response) {
        this.userData = this.handleAuth.dataLogged;
        this.cdr.detectChanges();
      }
    });
  }

  public logout(): void {
    this.handleAuth.logout_user();
    this.userData = this.handleAuth.dataLogged;
    this.cdr.detectChanges();
  }
}
