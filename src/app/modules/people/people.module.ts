import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { PeopleRoutingModule } from './people-routing.module';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    PanelModule,
    ButtonModule,
    TableModule,
    RippleModule,
    InputTextModule,
    FormsModule,
    FieldsetModule
  ]
})
export class PeopleModule { }
