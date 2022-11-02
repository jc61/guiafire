import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRecordingPage } from './create-recording.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRecordingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRecordingPageRoutingModule {}
