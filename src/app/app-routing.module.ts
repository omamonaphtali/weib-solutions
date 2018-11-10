import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ServicesComponent } from './services/services.component';
import { StartProjectComponent } from './start-project/start-project.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'portfolio', component: ProjectsListComponent},
  {path: 'our-services', component: ServicesComponent},
  {path: 'start-project', component: StartProjectComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
