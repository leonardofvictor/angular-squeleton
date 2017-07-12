import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GroupComponent} from './group.component';
import { GroupService } from './group.service';
import {GroupRoutingModule} from './group-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, GroupRoutingModule],
    declarations: [GroupComponent],
    providers: [GroupService]
})

export class GroupModule {}