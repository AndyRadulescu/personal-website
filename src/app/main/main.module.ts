import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { ContactMainModule } from './contact/contact-main/contact-main.module';
import { AboutMainModule } from './about/about-main/about-main.module';
import { GlobalModule } from './global/global.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    HomeModule,
    ContactMainModule,
    AboutMainModule,
    GlobalModule,
    ContactMainModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {
}
