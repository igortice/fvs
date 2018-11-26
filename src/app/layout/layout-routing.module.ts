import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path:      '',
    component: LayoutComponent,
    children:  [
      { path: '', loadChildren: '../pages/index/index.module#IndexModule' },
      { path: '**', loadChildren: '../pages/not-found/not-found.module#NotFoundModule' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LayoutRoutingModule {}
