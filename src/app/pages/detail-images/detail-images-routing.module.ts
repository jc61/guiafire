import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailImagesPage } from './detail-images.page';

const routes: Routes = [
  {
    path: '',
    component: DetailImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailImagesPageRoutingModule {}
