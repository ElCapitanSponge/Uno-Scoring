import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { PlayComponent } from './components/play/play.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListComponent
      }, {
        path: 'create',
        component: CreateComponent
      }, {
        path: ':id',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: ViewComponent
          }, {
            path: 'edit',
            pathMatch: 'full',
            component: EditComponent
          }, {
            path: 'play',
            component: PlayComponent
          }, {
            path: '**',
            loadChildren: () => import('../not-found/not-found.module').then(m => m.NotFoundModule)
          }
        ]
      }, {
        path: '**',
        loadChildren: () => import('../not-found/not-found.module').then(m => m.NotFoundModule)
      }
    ]
  }, {
    path: '**',
    loadChildren: () => import('../not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
