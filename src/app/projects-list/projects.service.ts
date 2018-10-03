import { ProjectsModel } from "./projects.model";

export class ProjectService {
  projects: ProjectsModel[] = [
    new ProjectsModel('sample title', 'description of sample project', 'path.to.project', 'https://res.cloudinary.com/jaredomamo/image/upload/v1538587733/practice/work1.jpg', 'sampleTag| sampleTag 2| sampleTag 3'),
    new ProjectsModel('sample title', 'description of sample project', 'path.to.project', 'https://res.cloudinary.com/jaredomamo/image/upload/v1538587734/practice/work4.jpg', 'sampleTag| sampleTag 2| sampleTag 3'),
    new ProjectsModel('sample title', 'description of sample project', 'path.to.project', 'https://res.cloudinary.com/jaredomamo/image/upload/v1538587730/practice/work6.jpg', 'sampleTag| sampleTag 2| sampleTag 3'),
    // new ProjectsModel('', '', '', '', ''),
  ];

  getProjectList() {
    return this.projects.slice();
    // console.log(this.projects);
  }
}