import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailImagesPageRoutingModule } from './detail-images-routing.module';

import { DetailImagesPage } from './detail-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailImagesPageRoutingModule
  ],
  declarations: [DetailImagesPage]
})
export class DetailImagesPageModule {}
