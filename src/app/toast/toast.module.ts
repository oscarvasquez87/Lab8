import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap';
import { ToastComponent } from './toast/toast.component';




@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot()
  ],
  declarations: [ToastComponent],
  exports: [
    ToastComponent
  ]
})
export class ToastModule { }
