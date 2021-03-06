import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [ HeaderComponent, FooterComponent, MainComponent, LayoutComponent ],
  imports:      [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule {}
