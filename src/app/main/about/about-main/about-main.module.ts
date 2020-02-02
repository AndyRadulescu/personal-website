import { NgModule } from '@angular/core';
import { AboutMainComponent } from './about-main.component';
import { AboutTerminalModule } from '../about-terminal/about-terminal.module';
import { AboutTitleModule } from '../about-title/about-title.module';

@NgModule({
  declarations: [
    AboutMainComponent
  ],
  imports: [
    AboutTerminalModule,
    AboutTitleModule
  ],
  exports: [
    AboutMainComponent
  ]
})
export class AboutMainModule {
}
