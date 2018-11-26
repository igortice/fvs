import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [ HomeComponent, AboutComponent ],
  imports:      [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule {}
