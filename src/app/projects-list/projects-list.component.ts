import { Component, OnInit } from '@angular/core';

import { ProjectsModel } from './projects.model';
import { ProjectService } from './projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  providers: [
    ProjectService
  ]
})
export class ProjectsListComponent implements OnInit {
  projects: ProjectsModel[];
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(
    private projService: ProjectService,
    ) { }

  ngOnInit() {
    this.projects = this.projService.getProjectList();
  }

}
