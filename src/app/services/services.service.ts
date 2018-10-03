import { ServicesModel } from "./services.model";

export class ServicesService {
  services: ServicesModel[] = [
    new ServicesModel('Web Design', ''),
    new ServicesModel('Web Development', ''),
    new ServicesModel('Software Development', ''),
    new ServicesModel('Network Solutions', '')
  ];

  getServicesList() {
    return this.services;
  }
}