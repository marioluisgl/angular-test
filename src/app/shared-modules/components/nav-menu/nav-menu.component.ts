import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalUsageWizardComponent } from '../../modals/modal-usage-wizard/modal-usage-wizard.component';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  constructor(private _matDialog: MatDialog,
              private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  public openWizardModal() {
    const modal = this._matDialog.open(ModalUsageWizardComponent, {
      panelClass: 'modal-data',
      width: '65vW',
      disableClose: true,
      hasBackdrop: false,
      data: {}
    });
    modal.afterClosed().pipe(untilDestroyed(this)).subscribe((response: any) => {
      console.log(response);
      if (response) {
        this._cdr.detectChanges();
      }
    });
  }

}
