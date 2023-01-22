import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { CreateComponent } from './components/create/create.component';
import { PlayComponent } from './components/play/play.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [
    CreateComponent,
    PlayComponent,
    EditComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    PanelModule,
    ButtonModule,
    TableModule,
    RippleModule,
    InputTextModule
  ]
})
export class GamesModule { }
