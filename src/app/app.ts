import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SharedModule } from './shared/shared-module';
import { Footer } from "./shared/footer/footer";
import { MallaComponent } from './Malla/malla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, Footer, MallaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pharmacy_plan');
}
