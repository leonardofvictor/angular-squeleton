import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServiceComponent} from './service.component';
import { ServiceService } from './service.service';
import {ServiceRoutingModule} from './service-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, ServiceRoutingModule],
    declarations: [ServiceComponent],
    exports: [ServiceComponent],
    providers: [ServiceService]
})

export class ServiceModule { }