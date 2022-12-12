import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { EditCraneDialogComponent } from "../edit-crane-dialog/edit-crane-dialog.component";
import { defaultDialogConfig } from '../../shared/default-dialog-config';
import { Crane } from 'interfaces/cranes';
import { CranesHttpService } from 'src/app/shared/cranes-http.service';

@Component({
  selector: 'app-list',
  templateUrl: './crane-card-list.component.html',
  styleUrls: ['./crane-card-list.component.scss']
})
export class CraneCardListComponent implements OnInit {

  @Input()
  cranes: Crane[];

  @Output()
  craneChanged = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    private cranesService: CranesHttpService) {
  }

  ngOnInit() {

  }

  editCrane(crane: Crane) {

    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: "Edit Crane",
      crane,
      mode: 'update'
    };

    this.dialog.open(EditCraneDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(        () => this.craneChanged.emit());

  }

  onDeleteCrane(crane: Crane) {
    this.cranesService.deleteCrane(crane._id)
      .subscribe(        () => this.craneChanged.emit());
  }
}
