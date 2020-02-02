import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    NgbModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule {
}
