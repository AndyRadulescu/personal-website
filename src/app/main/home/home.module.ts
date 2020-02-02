import { NgModule } from '@angular/core';
import { SectionInfoModule } from './section-info/section-info.module';
import { ProjectsModule } from './projects/projects.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SectionInfoModule,
    ProjectsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
