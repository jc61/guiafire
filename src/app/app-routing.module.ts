import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'singers',
    loadChildren: () => import('./pages/singers/singers.module').then( m => m.SingersPageModule)
  },
  {
    path: 'recording-studios',
    loadChildren: () => import('./pages/recording-studios/recording-studios.module').then( m => m.RecordingStudiosPageModule)
  },
  {
    path: 'detalle-recording/:id',
    loadChildren: () => import('./pages/detalle-recording/detalle-recording.module').then( m => m.DetalleRecordingPageModule)
  },
  {
    path: 'update-recording/:id',
    loadChildren: () => import('./pages/update-recording/update-recording.module').then( m => m.UpdateRecordingPageModule)
  },
  {
    path: 'create-recording',
    loadChildren: () => import('./pages/create-recording/create-recording.module').then( m => m.CreateRecordingPageModule)
  },
  {
    path: 'images',
    loadChildren: () => import('./pages/images/images.module').then( m => m.ImagesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
