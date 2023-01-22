import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/types/create/create.component';
import { EditComponent } from './components/types/edit/edit.component';
import { ListComponent } from './components/types/list/list.component';
import { ViewComponent } from './components/types/view/view.component';
import { CreateComponent as CardCreateComponent } from './components/card/create/create.component';
import { ViewComponent as CardViewComponent } from './components/card/view/view.component';
import { EditComponent as CardEditComponent } from './components/card/edit/edit.component';

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
            children: [
              {
                path: '',
                pathMatch: 'full',
                component: EditComponent
              }, {
                path: 'card',
                children: [
                  {
                    path: 'create',
                    component: CardCreateComponent
                  }, {
                    path: ':card_id',
                    children: [
                      {
                        path: '',
                        pathMatch: 'full',
                        component: CardViewComponent
                      }, {
                        path: 'edit',
                        component: CardEditComponent
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
