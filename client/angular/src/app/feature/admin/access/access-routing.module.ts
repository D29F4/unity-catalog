import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//---------------------------------------------------------------------------
import { UserListComponent } from './user/list.component';
import { UserComponent } from './user/user.component';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const routes: Routes = [

  //  User list
  {
    path: 'user',
    component: UserListComponent,
  },
  //  User (add)
  {
    path: 'user/new',
    component: UserComponent,
  },
  //  User (edit, view)
  {
    path: 'user/:id',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessRoutingModule {}
