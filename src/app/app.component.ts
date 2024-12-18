import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBlindingComponent } from './event-blinding/event-blinding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterpolationComponent, EventBlindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flashly';
}
