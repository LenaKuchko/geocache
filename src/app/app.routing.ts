import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Geocache } from './geocache';
import { GeocacheListComponent } from './geocache-list/geocache-list.component';
import { GeocacheFormComponent } from './geocache-form/geocache-form.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: GeocacheFormComponent
  },
  {
   path: 'about',
   component: AboutComponent
 }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
