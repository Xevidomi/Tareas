import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-tarea',
  templateUrl: './home-tarea.component.html',
  styleUrls: ['./home-tarea.component.css']
})
export class HomeTareaComponent {
  // Lista de tareas
  tareas = [
    { id: 1, titular: 'Comprar alimentos', descripcion: 'Ir al supermercado a comprar víveres.' },
    { id: 2, titular: 'Lavar el coche', descripcion: 'Lavar el coche en el lavadero.' },
    { id: 3, titular: 'Hacer ejercicio', descripcion: 'Correr 5 kilómetros en el parque.' }
  ];

  constructor(private router: Router) { }

  // Método para navegar a la especificación de tarea
  verTarea(id: number) {
    this.router.navigate(['/tarea', id]);
  }
}

