import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleRecordingPageRoutingModule } from './detalle-recording-routing.module';

import { DetalleRecordingPage } from './detalle-recording.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleRecordingPageRoutingModule
  ],
  declarations: [DetalleRecordingPage]
})
export class DetalleRecordingPageModule {}
