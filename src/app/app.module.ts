import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SiteNoticeComponent } from './site-notice/site-notice.component';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './main/main.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    SiteNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    PageNotFoundModule,
    MainModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
