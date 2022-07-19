import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { AccessRoutingModule } from './access-routing.module';
//
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    //
    AccessRoutingModule,
  ],
  exports: [UserComponent],
})
export class AccessModule {}
