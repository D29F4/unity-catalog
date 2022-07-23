import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//---------------------------------------------------------------------------
import { SharedRoutingModule } from './shared-routing.module';
//---------------------------------------------------------------------------
import { AlertComponent } from './alert/alert.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


@NgModule({
  declarations: [
    AlertComponent,
    FooterComponent,
    HeaderComponent,
    RouteNotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    AlertComponent,
    FooterComponent,
    HeaderComponent,
    RouteNotFoundComponent,
  ],
})
export class SharedModule {}
