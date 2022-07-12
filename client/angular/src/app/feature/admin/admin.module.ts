import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { AdminRoutingModule } from './admin-routing.module';
//
import { AccessModule } from './access/access.module';
import { ConfigModule } from './config/config.module';
import { ActivityModule } from './activity/activity.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //
    AdminRoutingModule,
    //
    AccessModule,
    ConfigModule,
    ActivityModule,
  ]
})
export class AdminModule { }
