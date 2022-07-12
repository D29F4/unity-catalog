import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { RouteNotFoundComponent } from './shared/route-not-found/route-not-found.component';

const routes: Routes = [

  //  Features
  {
    path: '',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
  },

  //  404/route not found
  {
    path: '**',
    component: RouteNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
