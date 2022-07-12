// SPDX-License-Identifier: GPL-2.0-only

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { AdminModule } from './admin/admin.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    //
    AppRoutingModule,
    //
    AdminModule,
    FeatureModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
