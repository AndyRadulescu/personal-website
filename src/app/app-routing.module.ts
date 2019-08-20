import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { AboutMainComponent } from './about/about-main/about-main.component';
import { SiteNoticeComponent } from './site-notice/site-notice.component';

const appRoutes: Routes = [
  { path: 'site-notice', component: SiteNoticeComponent },
  { path: 'contact', component: ContactMainComponent },
  { path: 'about', component: AboutMainComponent },
  { path: '', component: MainComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
