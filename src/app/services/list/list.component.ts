import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from '../service.service';
import { ServiceList } from './service-list';

@Component({
  selector: 'app-service-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  servlist: ServiceList[];
  private subscribe: any;
  group: number;
  page: number;
  constructor(
      private service: ServiceService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.service.getList().then(services => this.servlist = services);
  }


}
