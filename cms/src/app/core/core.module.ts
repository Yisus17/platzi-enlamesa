import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule
  ],
  providers:[
    //Aqui meteremos todos los servicios que haya que exportar a toda la app
  ]
})
export class CoreModule { }
