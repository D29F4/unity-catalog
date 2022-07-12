import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//
import { FeatureRoutingModule } from './feature-routing.module';
import { ItemModule } from './item/item.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //
    FeatureRoutingModule,
    ItemModule,
  ]
})
export class FeatureModule { }
