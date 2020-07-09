import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'slide-backdrop',
    loadChildren: () => import('./components/slide-backdrop/slide-backdrop.module').then( m => m.SlideBackdropPageModule)
  },
  {
    path: 'slide-pair-movies',
    loadChildren: () => import('./components/slide-pair-movies/slide-pair-movies.module').then( m => m.SlidePairMoviesPageModule)
  },
  {
    path: 'movie-details-modal',
    loadChildren: () => import('./components/movie-details-modal/movie-details-modal.module').then( m => m.MovieDetailsModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
