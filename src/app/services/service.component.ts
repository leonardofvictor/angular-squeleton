import { Component } from '@angular/core';
import {ServiceService} from './service.service';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.css'],
})



export class ServiceComponent {
    title = 'Gerenciador de Serviços';
    service = '';
    selectedService = '';
    services = [];
    constructor(serviceService: ServiceService) {
        this.service = ServiceService.name;
    }
}