import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PickListModule } from 'primeng/picklist';
import { PaginatorModule } from 'primeng/paginator';
import { MenuModule } from 'primeng/menu';
import { DataViewModule } from 'primeng/dataview';
import { AccordionModule } from 'primeng/accordion';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';
@NgModule({
  declarations: [],
  imports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    SidebarModule,
    PasswordModule,
    TableModule,
    TagModule,
    IconFieldModule,
    InputIconModule,
    DialogModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    MessagesModule,
    ProgressSpinnerModule,
    PickListModule,
    PaginatorModule,
    MenuModule,
    DataViewModule,
    AccordionModule,
    InputTextareaModule,
    FloatLabelModule
  ],
  exports:[
    CardModule,
    ButtonModule,
    InputTextModule,
    SidebarModule,
    PasswordModule,
    TableModule,
    TagModule,
    IconFieldModule,
    InputIconModule,
    DialogModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    MessagesModule,
    ProgressSpinnerModule,
    PickListModule,
    PaginatorModule,
    MenuModule,
    DataViewModule,
    AccordionModule,
    InputTextareaModule,
    FloatLabelModule
  ]
})
export class PrimeNgModule { }
