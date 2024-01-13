import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  
  welcome = 'Hola';
  tasks = [
    'Tarea 1',
    'Tarea 2',
    'Tarea 3'
  ]

  clickHandle() {
    console.log("putos");
    
  }

  changeHandler(event: Event) {
    console.log(event);
    
  }
  
  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

}
