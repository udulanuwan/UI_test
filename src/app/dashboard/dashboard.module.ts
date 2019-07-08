import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SummeryComponent } from './summery/summery.component';
import { SharedModule } from '../shared/shared.module';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [SummeryComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    GoogleChartsModule
  ]
})
export class DashboardModule { }
