import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionContactComponent} from './home/main/section-contact/section-contact.component';
import {PageNotFoundComponent} from './home/page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './home/main/main.component';

const appRoutes: Routes = [
    {path: 'contact', component: SectionContactComponent},
    {path: '', component: MainComponent},
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
