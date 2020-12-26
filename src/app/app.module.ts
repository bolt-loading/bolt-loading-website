import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InstallationComponent } from './installation/installation.component';
import { HomeSplashComponent } from './home-splash/home-splash.component';
import { PhoneSvgComponent } from './phone-svg/phone-svg.component';
import { PhoneMockupComponent } from './phone-mockup/phone-mockup.component';
import { FormButtonComponent } from './form-button/form-button.component';
import { LoadingComponent } from './loading/loading.component';
import { CopyCommandComponent } from './copy-command/copy-command.component';
import { HandSvgComponent } from './hand-svg/hand-svg.component';
import { WorldSvgComponent } from './world-svg/world-svg.component';
import { CssSvgComponent } from './css-svg/css-svg.component';
import { BookSvgComponent } from './book-svg/book-svg.component';
import { ColorsSvgComponent } from './colors-svg/colors-svg.component';
import { OpenSourceSvgComponent } from './open-source-svg/open-source-svg.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { DevelopmentEnvironmentsSectionComponent } from './development-environments-section/development-environments-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LogoComponent,
    InstallationComponent,
    HomeSplashComponent,
    PhoneSvgComponent,
    PhoneMockupComponent,
    FormButtonComponent,
    LoadingComponent,
    CopyCommandComponent,
    HandSvgComponent,
    WorldSvgComponent,
    CssSvgComponent,
    BookSvgComponent,
    ColorsSvgComponent,
    OpenSourceSvgComponent,
    ServicesSectionComponent,
    DevelopmentEnvironmentsSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
