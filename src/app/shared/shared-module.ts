import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Header } from './header/header';
import { Footer } from './footer/footer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Header
  ],
  exports: [Header]

})
export class SharedModule { }
