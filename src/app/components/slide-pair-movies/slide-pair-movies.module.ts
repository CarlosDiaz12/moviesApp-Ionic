import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidePairMoviesPageRoutingModule } from './slide-pair-movies-routing.module';

import { SlidePairMoviesPage } from './slide-pair-movies.page';
import { PairPipe } from '../../pipes/pair.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidePairMoviesPageRoutingModule
  ],
  declarations: [SlidePairMoviesPage, PairPipe],
  exports: [SlidePairMoviesPage]
})
export class SlidePairMoviesPageModule {}
