import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRecordingPageRoutingModule } from './create-recording-routing.module';

import { CreateRecordingPage } from './create-recording.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateRecordingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateRecordingPage]
})
export class CreateRecordingPageModule {}
