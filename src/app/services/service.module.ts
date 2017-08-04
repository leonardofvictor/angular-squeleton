import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServiceComponent} from './service.component';
import { ServiceService } from './service.service';
import {ServiceRoutingModule} from './service-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

@NgModule({
    imports: [CommonModule, FormsModule, ServiceRoutingModule],
    declarations: [ServiceComponent, ListComponent, CreateComponent],
    exports: [ServiceComponent],
    providers: [ServiceService]
})

export class ServiceModule { }