import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleRecordingPage } from './detalle-recording.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleRecordingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleRecordingPageRoutingModule {}
