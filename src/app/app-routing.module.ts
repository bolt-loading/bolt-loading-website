import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { InstallationComponent } from "./installation/installation.component";
import { UsageComponent } from "./usage/usage.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'installation',
    component: InstallationComponent
  },
  {
    path: 'usage',
    component: UsageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
