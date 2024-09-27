import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormlyDemoRoutingModule } from './formly-demo-routing.module';
import { FormlyComponent } from './formly/formly.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    FormlyComponent
  ],
  imports: [
    CommonModule,
    FormlyDemoRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule,
    FormlyModule.forRoot(),
    FormlyPrimeNGModule
  ],
  exports:[FormlyComponent]
})
export class FormlyDemoModule { }
