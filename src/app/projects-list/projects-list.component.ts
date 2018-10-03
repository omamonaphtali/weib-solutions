import { Component, OnInit } from '@angular/core';

import { ProjectsModel } from './projects.model';
import { ProjectService } from './projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  providers: [ProjectService]
})
export class ProjectsListComponent implements OnInit {
  projects: ProjectsModel[];

  constructor(private projService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projService.getProjectList();
  }

}
