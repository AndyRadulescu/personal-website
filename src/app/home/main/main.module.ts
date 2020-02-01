import { NgModule } from '@angular/core';
import { SectionInfoModule } from './section-info/section-info.module';
import { ProjectsModule } from './projects/projects.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SectionInfoModule,
    ProjectsModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {
}
