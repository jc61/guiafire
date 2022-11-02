import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordingStudiosPageRoutingModule } from './recording-studios-routing.module';

import { RecordingStudiosPage } from './recording-studios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordingStudiosPageRoutingModule
  ],
  declarations: [RecordingStudiosPage]
})
export class RecordingStudiosPageModule {}
