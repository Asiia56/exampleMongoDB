import { Component, OnInit } from '@angular/core';
import { Crane, compareCranes } from '../../../../interfaces/cranes';
import { Observable } from "rxjs";
import { defaultDialogConfig } from '../../shared/default-dialog-config';
import { EditCraneDialogComponent } from '../edit-crane-dialog/edit-crane-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { map, shareReplay } from 'rxjs/operators';
import { CranesHttpService } from '../../shared/cranes-http.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  loading$: Observable<boolean>;
  crawlerCrane$: Observable<Crane[]>;
  wheelCrane$: Observable<Crane[]>;

  constructor(private cranesHttpService: CranesHttpService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.reload();

  }
  reload() {
    const cranes$ = this.cranesHttpService.findAllCranes().pipe(
      map(cranes => cranes.sort(compareCranes)),
      shareReplay()
    );

    this.loading$ = cranes$.pipe(map(cranes => !!cranes));

    this.crawlerCrane$ = cranes$.pipe(map(cranes => cranes.filter(cranes => cranes.category == 'CRAWLER_CRANE')));

    this.wheelCrane$ = cranes$.pipe(map(cranes => cranes.filter(cranes => cranes.category == 'WHEEL_CRANE')));
  }

  onAddCrane() {
    const dialogConfig = defaultDialogConfig();
    dialogConfig.data = {
      dialogTitle: "Create crane",
      mode: 'create'
    };

    this.dialog.open(EditCraneDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(data => {
        if (data) {
          this.reload();
        }
      });

  }
}
