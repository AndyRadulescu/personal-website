import { NgModule } from '@angular/core';
import { ContactMainComponent } from './contact-main.component';
import { SectionEmailModule } from '../section-email/section-email.module';
import { SectionContactModule } from '../section-contact/section-contact.module';

@NgModule({
  declarations: [
    ContactMainComponent
  ],
  imports: [
    SectionContactModule,
    SectionEmailModule.forRoot()
  ],
  exports: [
    ContactMainComponent
  ]
})
export class ContactMainModule {
}
