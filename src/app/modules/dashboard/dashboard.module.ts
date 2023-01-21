import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PanelModule } from 'primeng/panel'
import { ButtonModule } from 'primeng/button'
import { TableModule } from 'primeng/table'
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PanelModule,
    ButtonModule,
    TableModule
  ]
})
export class DashboardModule { }
