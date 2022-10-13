import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TableLightComponent } from './table-light/table-light.component';
import { BtnComponent } from './btn/btn.component';
import { RouterModule } from '@angular/router';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    StateDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[TemplatesModule, IconsModule, TableLightComponent, BtnComponent, TotalPipe, StateDirective,ReactiveFormsModule]
})
export class SharedModule { }
