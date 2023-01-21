import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ListComponent } from './components/types/list/list.component';
import { CreateComponent } from './components/types/create/create.component';
import { EditComponent } from './components/types/edit/edit.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
