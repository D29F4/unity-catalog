import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const routes: Routes = [
  //  Admin
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },

  //  Item
  {
    path: 'item',
    loadChildren: () => import('./item/item.module').then((m) => m.ItemModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
