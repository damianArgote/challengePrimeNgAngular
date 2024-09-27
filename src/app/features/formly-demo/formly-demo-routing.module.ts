import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormlyComponent } from './formly/formly.component';

const routes: Routes = [
  {
    path:'',
    component:FormlyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormlyDemoRoutingModule { }
