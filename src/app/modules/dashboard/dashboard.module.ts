import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PanelModule } from 'primeng/panel'
import { ButtonModule } from 'primeng/button'
import { TableModule } from 'primeng/table'
import { RippleModule } from 'primeng/ripple';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PanelModule,
    ButtonModule,
    TableModule,
    RippleModule
  ]
})
export class DashboardModule { }
