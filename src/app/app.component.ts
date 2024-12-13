import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { LoremComponent } from './lorem/lorem.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, LoremComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flashly';
}
