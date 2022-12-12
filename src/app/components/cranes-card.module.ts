import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CranesCardRoutingModule } from './cranes-card-routing.module';
import { ViewComponent } from './view/view.component';
import { EditCraneDialogComponent } from './edit-crane-dialog/edit-crane-dialog.component';
import { CraneCardListComponent } from './crane-card-list/crane-card-list.component';
import { CranesHttpService } from '../shared/cranes-http.service'
import { MaterialExampleModule } from '../material.module';
import { CraneDetailComponent } from './crane-detail/crane-detail.component';

@NgModule({
  declarations: [
    ViewComponent,
    EditCraneDialogComponent,
    CraneCardListComponent,
    CraneDetailComponent
  ],
  imports: [
    CommonModule,
    CranesCardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ],
  providers: [ CranesHttpService ]
})
export class CranesCardModule { }
