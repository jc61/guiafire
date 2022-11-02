import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateRecordingPage } from './update-recording.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateRecordingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRecordingPageRoutingModule {}
