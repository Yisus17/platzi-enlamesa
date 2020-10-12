import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
//Services


@NgModule({
  declarations: [
    //Aqui meteremos todos los componentes que sea compartidos
  ],
  imports: [
    //Aqui meteremos todos los componentes que sea compartidos
  ],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
