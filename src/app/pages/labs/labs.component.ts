import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

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
  ];

  name = signal("Alejandro");

  clickHandle() {
    console.log("putos");
    
  }

  changeHandler(event: Event) {
    console.log(event);
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }
  
  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

}
