import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ListComponent } from './components/types/list/list.component';
import { CreateComponent } from './components/types/create/create.component';
import { EditComponent } from './components/types/edit/edit.component';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ViewComponent } from './components/types/view/view.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    PanelModule,
    ButtonModule,
    TableModule,
    RippleModule,
    InputTextModule
  ]
})
export class SettingsModule { }
