import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//---------------------------------------------------------------------------
import { FeatureRoutingModule } from './feature-routing.module';
import { ItemModule } from './item/item.module';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //----------------------------------
    FeatureRoutingModule,
    ItemModule,
  ],
})
export class FeatureModule {}
