import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { MallaComponent } from './Malla/malla.component';
import { App } from './app';

@NgModule({
    declarations: [],
    imports: [
        RouterOutlet,
        App,
        MallaComponent
    ],
    bootstrap: [],
})

export class AppModule { }