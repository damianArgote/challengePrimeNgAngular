import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[TopbarComponent]
})
export class SharedModule { }
