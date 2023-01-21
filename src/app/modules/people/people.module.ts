import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
