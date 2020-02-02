import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SiteNoticeComponent } from './site-notice/site-notice.component';

const appRoutes: Routes = [
  { path: 'site-notice', component: SiteNoticeComponent },
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
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
