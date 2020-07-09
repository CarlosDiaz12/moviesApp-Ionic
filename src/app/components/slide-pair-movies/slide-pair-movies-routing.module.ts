import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidePairMoviesPage } from './slide-pair-movies.page';

const routes: Routes = [
  {
    path: '',
    component: SlidePairMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidePairMoviesPageRoutingModule {}
