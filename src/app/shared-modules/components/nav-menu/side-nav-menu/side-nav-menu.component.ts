import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalUsageWizardComponent } from 'src/app/shared-modules/modals/modal-usage-wizard/modal-usage-wizard.component';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss']
})
export class SideNavMenuComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(private matDialog: MatDialog,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
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
