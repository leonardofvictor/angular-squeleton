import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GroupModule} from './../groups/group.module';
import {ServiceModule} from './../services/service.module';
import {UserModule} from './../users/user.module';


@NgModule({
  imports: [
    CommonModule,
      GroupModule,
      UserModule,
      ServiceModule,
  ],
})
export class CoreModule { }
