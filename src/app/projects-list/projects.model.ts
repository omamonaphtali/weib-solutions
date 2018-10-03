export class ProjectsModel {
  public title: string;
  public description: string;
  public projectUrl: string;
  public projectPlaceholder: string;
  public tags: string;

  constructor(title: string, desc: string, url: string, placeholder: string, tags: string) {
    this.title = title;
    this.description = desc;
    this.projectUrl = url;
    this.projectPlaceholder = placeholder;
    this.tags = tags;
  }
}