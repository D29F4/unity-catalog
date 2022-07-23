import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//---------------------------------------------------------------------------
import { ItemRoutingModule } from './item-routing.module';
//---------------------------------------------------------------------------
import { ItemWorkspaceComponent } from './item-workspace/item-workspace.component';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


@NgModule({
  declarations: [ItemWorkspaceComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //----------------------------------
    ItemRoutingModule,
  ],
  exports: [ItemWorkspaceComponent],
})
export class ItemModule {}
