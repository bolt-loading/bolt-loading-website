import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { InstallationComponent } from "./installation/installation.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'installation',
    component: InstallationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
