import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './home/main/main.component';
import {TitleComponent} from './home/main/section-info/title/title.component';
import {SectionInfoComponent} from './home/main/section-info/section-info.component';
import {ButtonComponent} from './home/main/button/button.component';
import {SectionContactComponent} from './home/main/section-contact/section-contact.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './home/page-not-found/page-not-found.component';
import {NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './global/components/navbar/navbar.component';
import { FooterComponent } from './global/components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        TitleComponent,
        SectionInfoComponent,
        ButtonComponent,
        SectionContactComponent,
        PageNotFoundComponent,
        NavbarComponent,
        FooterComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbCollapseModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
