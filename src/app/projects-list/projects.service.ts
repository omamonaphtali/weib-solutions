import { ProjectsModel } from "./projects.model";

export class ProjectService {
  projects: ProjectsModel[] = [
    new ProjectsModel(
      'Peace Warriors Organization', 
      'A women-led, non-profit, non-partisan and non-governmental organisation committed to support, position and strengthen women and girls through social, economic and political interventions at all levels of governance resulting to peace as the bigger picture.',
      'http://peacewarriors.or.ke/',
      'https://res.cloudinary.com/jaredomamo/image/upload/v1538587733/practice/work1.jpg',
      'Visual Design | Angular | CMS'),
    new ProjectsModel(
      'Enventures Tour Plus',
      'Combining the spirits of adventure and knowledge to encourage entrepreneurship in the wild',
      'http://enventurestourplus.com',
      'https://res.cloudinary.com/jaredomamo/image/upload/v1538587734/practice/work4.jpg',
      'Visual Design | Angular | CMS'),
    new ProjectsModel(
      'Impact: An Artistic Impression',
      'An artistic impression of Impact International Kenya, a design agency in Kenya',
      'http://impactke.herokuapp.com/',
      'https://res.cloudinary.com/jaredomamo/image/upload/v1538587730/practice/work6.jpg',
      'Creative Concept | Django(Python) | Landing Page'),
    // new ProjectsModel('', '', '', '', ''),
  ];

  getProjectList() {
    return this.projects.slice();
    // console.log(this.projects);
  }
}