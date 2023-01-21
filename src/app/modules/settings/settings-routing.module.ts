import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/types/create/create.component';
import { EditComponent } from './components/types/edit/edit.component';
import { ListComponent } from './components/types/list/list.component';

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
        component: EditComponent
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
export class SettingsRoutingModule { }
