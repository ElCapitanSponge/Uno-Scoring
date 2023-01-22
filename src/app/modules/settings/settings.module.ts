import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { CreateComponent } from './components/types/create/create.component';
import { EditComponent } from './components/types/edit/edit.component';
import { ListComponent } from './components/types/list/list.component';
import { ViewComponent } from './components/types/view/view.component';
import { SettingsRoutingModule } from './settings-routing.module';

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
    InputTextModule,
    FieldsetModule,
    FormsModule
  ]
})
export class SettingsModule { }
