import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { InstallationComponent } from "./installation/installation.component";
import { UsageComponent } from "./usage/usage.component";
import { OptionsComponent } from "./options/options.component";
import { AnimationsComponent } from "./animations/animations.component";
import { BrowserComponent } from "./browser/browser.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'usage', component: UsageComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'browser', component: BrowserComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
