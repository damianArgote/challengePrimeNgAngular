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
    }
  ]

}
