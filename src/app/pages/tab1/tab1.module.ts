import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';


import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SlideBackdropPageModule } from '../../components/slide-backdrop/slide-backdrop.module';
import { SlidePairMoviesPageModule } from '../../components/slide-pair-movies/slide-pair-movies.module';
import { MovieDetailsModalPageModule } from '../../components/movie-details-modal/movie-details-modal.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    SlideBackdropPageModule,
    SlidePairMoviesPageModule,
    MovieDetailsModalPageModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
