import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './home/main/main.component';
import { TitleComponent } from './home/main/section-info/title/title.component';
import { SectionInfoComponent } from './home/main/section-info/section-info.component';
import { ButtonComponent } from './home/main/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TitleComponent,
    SectionInfoComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
