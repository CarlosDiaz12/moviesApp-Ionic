import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlideBackdropPageRoutingModule } from './slide-backdrop-routing.module';

import { SlideBackdropPage } from './slide-backdrop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlideBackdropPageRoutingModule
  ],
  declarations: [SlideBackdropPage],
  exports: [SlideBackdropPage]
})
export class SlideBackdropPageModule {}
