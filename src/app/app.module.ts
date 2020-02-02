import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutMainComponent } from './about/about-main/about-main.component';
import { AboutTitleComponent } from './about/about-title/about-title.component';
import { AboutTerminalComponent } from './about/about-terminal/about-terminal.component';
import { SiteNoticeComponent } from './site-notice/site-notice.component';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './home/main/main.module';
import { PageNotFoundModule } from './home/page-not-found/page-not-found.module';
import { GlobalModule } from './global/global.module';
import { ContactMainModule } from './contact/contact-main/contact-main.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutMainComponent,
    AboutTitleComponent,
    AboutTerminalComponent,
    SiteNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    PageNotFoundModule,
    NgbModule,
    GlobalModule,
    MainModule,
    ContactMainModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
