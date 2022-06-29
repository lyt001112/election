import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GovernmentRoutingModule } from './government-routing.module';
import { GovernmentComponent } from '../government.component';
import { GovernmentCreateResumeComponent } from './components/government-create-resume/government-create-resume.component';
import { GovernmentEditPermissionComponent } from './components/government-edit-permission/government-edit-permission.component';


@NgModule({
  declarations: [
    GovernmentComponent,
    GovernmentCreateResumeComponent,
    GovernmentEditPermissionComponent
  ],
  imports: [
    CommonModule,
    GovernmentRoutingModule
  ]
})
export class GovernmentModule { }
