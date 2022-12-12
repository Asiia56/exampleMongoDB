import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraneDetailComponent } from './crane-detail/crane-detail.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ViewComponent },
  { path: ':cranesUrl', component: CraneDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CranesCardRoutingModule { }
