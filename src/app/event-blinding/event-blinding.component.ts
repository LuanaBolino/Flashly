import { Component } from '@angular/core';

@Component({
  selector: 'app-event-blinding',
  imports: [],
  templateUrl: './event-blinding.component.html',
  styleUrl: './event-blinding.component.css'
})
export class EventBlindingComponent {
  nome: string = 'Maria';
  onclick(){
    document.write(`O nome é ${this.nome}!`)
  }
}
