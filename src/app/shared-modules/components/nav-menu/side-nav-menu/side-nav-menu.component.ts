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
  }

}
