import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sidebarVisible: boolean = false;

  items:MenuItem[] =[
    {
      label:'Blog',
      routerLink:['/dashboard/post'],
      icon:'pi pi-bookmark'
    },
    {
      label:'TODO List',
      routerLink:['/dashboard/todo'],
      icon:'pi pi-list-check'
    },
    {
      label:'Formly Demo',
      routerLink:['/dashboard/formly-demo'],
      icon:'pi pi-pen-to-square'
    }
  ]

}
