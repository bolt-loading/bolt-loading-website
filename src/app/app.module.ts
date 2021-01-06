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
import { DetailComponent } from './detail/detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsageComponent } from './usage/usage.component';
import { OptionsComponent } from './options/options.component';
import { AnimationsComponent } from './animations/animations.component';
import { BrowserComponent } from './browser/browser.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarMobileComponent } from './sidebar-mobile/sidebar-mobile.component';
import { CaretDownSvgComponent } from './caret-down-svg/caret-down-svg.component';
import { ExplorerSvgComponent } from './explorer-svg/explorer-svg.component';
import { EdgeSvgComponent } from './edge-svg/edge-svg.component';
import { FirefoxSvgComponent } from './firefox-svg/firefox-svg.component';
import { OperaSvgComponent } from './opera-svg/opera-svg.component';
import { SafariSvgComponent } from './safari-svg/safari-svg.component';
import { ChromeSvgComponent } from './chrome-svg/chrome-svg.component';
import { MailSvgComponent } from './mail-svg/mail-svg.component';
import { CardItemComponent } from './card-item/card-item.component';
import { ServicesIconsComponent } from './services-icons/services-icons.component';
import { AppleLoadingComponent } from './apple-loading/apple-loading.component';
import { KitchenLoadingComponent } from './kitchen-loading/kitchen-loading.component';
import { AtomLoadingComponent } from './atom-loading/atom-loading.component';

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
    FooterComponent,
    DetailComponent,
    SidebarComponent,
    UsageComponent,
    OptionsComponent,
    AnimationsComponent,
    BrowserComponent,
    ContactComponent,
    SidebarMobileComponent,
    CaretDownSvgComponent,
    ExplorerSvgComponent,
    EdgeSvgComponent,
    FirefoxSvgComponent,
    OperaSvgComponent,
    SafariSvgComponent,
    ChromeSvgComponent,
    MailSvgComponent,
    CardItemComponent,
    ServicesIconsComponent,
    AppleLoadingComponent,
    KitchenLoadingComponent,
    AtomLoadingComponent
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
