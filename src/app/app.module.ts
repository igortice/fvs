import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    LayoutModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
