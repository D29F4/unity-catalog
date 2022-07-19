import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { ItemWorkspaceComponent } from './item-workspace/item-workspace.component';

const routes: Routes = [
  //  Main item workspace/dashboard
  {
    path: '',
    component: ItemWorkspaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemRoutingModule {}
