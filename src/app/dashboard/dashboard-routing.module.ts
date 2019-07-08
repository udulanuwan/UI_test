import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummeryComponent } from './summery/summery.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'summary' },
  { path: 'summary', component: SummeryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
