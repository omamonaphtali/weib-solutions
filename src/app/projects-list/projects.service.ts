import { ProjectsModel } from "./projects.model";

export class ProjectService {
  projects: ProjectsModel[] = [
    new ProjectsModel('sample title', 'description of sample project', 'path.to.project', 'path.to.placeholder.location', 'sampleTag| sampleTag 2| sampleTag 3'),
    new ProjectsModel('sample title', 'description of sample project', 'path.to.project', 'path.to.placeholder.location', 'sampleTag| sampleTag 2| sampleTag 3'),
    new ProjectsModel('sample title', 'description of sample project', 'path.to.project', 'path.to.placeholder.location', 'sampleTag| sampleTag 2| sampleTag 3'),
    // new ProjectsModel('', '', '', '', ''),
  ];

  getProjectList() {
    return this.projects.slice();
    // console.log(this.projects);
  }
}