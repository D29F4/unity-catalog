import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { ActivityRoutingModule } from './activity-routing.module';
//
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    LogComponent,
  ],
  imports: [
    CommonModule,
    //
    ActivityRoutingModule,
  ]
})
export class ActivityModule { }
