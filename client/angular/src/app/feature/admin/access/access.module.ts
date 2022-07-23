import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//---------------------------------------------------------------------------
import { AccessRoutingModule } from './access-routing.module';
//---------------------------------------------------------------------------
import { UserListComponent } from './user/list.component';
import { UserComponent } from './user/user.component';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //----------------------------------
    AccessRoutingModule,
  ],
  exports: [
    UserListComponent,
    UserComponent,
  ],
})
export class AccessModule {}
