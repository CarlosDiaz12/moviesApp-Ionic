import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideBackdropPage } from './slide-backdrop.page';

const routes: Routes = [
  {
    path: '',
    component: SlideBackdropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlideBackdropPageRoutingModule {}
