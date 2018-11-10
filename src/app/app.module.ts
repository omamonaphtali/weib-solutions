import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsDetailComponent } from './projects-list/projects-detail/projects-detail.component';
import { ServicesComponent } from './services/services.component';
import { ServicesDetailComponent } from './services/services-detail/services-detail.component';
import { HeaderComponent } from './shared/header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { StartProjectComponent } from './start-project/start-project.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ProjectsListComponent,
    ProjectsDetailComponent,
    ServicesComponent,
    ServicesDetailComponent,
    HeaderComponent,
    DropdownDirective,
    StartProjectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
