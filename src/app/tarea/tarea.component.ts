import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  tareaId: number = 0; // Inicialización con valor por defecto

  // Lista de tareas (puedes usar un servicio en una aplicación más avanzada)
  tareas = [
    { id: 1, titular: 'Comprar alimentos', descripcion: 'Ir al supermercado a comprar víveres.' },
    { id: 2, titular: 'Lavar el coche', descripcion: 'Lavar el coche en el lavadero.' },
    { id: 3, titular: 'Hacer ejercicio', descripcion: 'Correr 5 kilómetros en el parque.' }
  ];

  constructor(private route: ActivatedRoute) {}

  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tareaId = +id;
    }
  }
}