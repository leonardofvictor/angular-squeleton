import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServiceComponent} from './service.component';
import { ServiceService } from './service.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ServiceComponent],
    exports: [ServiceComponent],
    providers: [ServiceService]
})

export class ServiceModule { }