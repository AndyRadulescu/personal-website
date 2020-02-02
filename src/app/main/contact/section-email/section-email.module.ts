import { ModuleWithProviders, NgModule } from '@angular/core';
import { SectionEmailComponent } from './section-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import EmailService from './email.service';

@NgModule({
  declarations: [
    SectionEmailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SectionEmailComponent
  ]
})
export class SectionEmailModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SectionEmailModule,
      providers: [
        { provide: EmailService, useValue: EmailService }
      ]
    };
  }
}
