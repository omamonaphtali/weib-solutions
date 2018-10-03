import { Component, OnInit } from '@angular/core';

import { ServicesService } from './services.service';
import { ServicesModel } from './services.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ServicesService]
})
export class ServicesComponent implements OnInit {
  services: ServicesModel[];

  constructor(private servService: ServicesService) { }

  ngOnInit() {
    this.services = this.servService.getServicesList();
  }

}
