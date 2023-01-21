import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { CreateComponent } from './components/create/create.component';
import { PlayComponent } from './components/play/play.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    CreateComponent,
    PlayComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
