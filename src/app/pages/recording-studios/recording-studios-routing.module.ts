import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordingStudiosPage } from './recording-studios.page';

const routes: Routes = [
  {
    path: '',
    component: RecordingStudiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordingStudiosPageRoutingModule {}
