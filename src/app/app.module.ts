import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionContactComponent } from './contact/section-contact/section-contact.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './global/components/navbar/navbar.component';
import { FooterComponent } from './global/components/footer/footer.component';
import { SectionEmailComponent } from './contact/section-email/section-email.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutMainComponent } from './about/about-main/about-main.component';
import { AboutTitleComponent } from './about/about-title/about-title.component';
import { AboutTerminalComponent } from './about/about-terminal/about-terminal.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { SiteNoticeComponent } from './site-notice/site-notice.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalStyleDirective } from './global/global-style.directive';
import { MainModule } from './home/main/main.module';
import { PageNotFoundModule } from './home/page-not-found/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    SectionContactComponent,
    NavbarComponent,
    FooterComponent,
    SectionEmailComponent,
    ContactMainComponent,
    AboutMainComponent,
    AboutTitleComponent,
    AboutTerminalComponent,
    ContactInfoComponent,
    SiteNoticeComponent,
    GlobalStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    PageNotFoundModule,
    NgbModule,
    MainModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
