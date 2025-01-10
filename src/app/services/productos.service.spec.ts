import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  // Simulando una base de datos de productos
  private productos = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', precio: 150 },
    { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', precio: 200 },
  ];

  constructor() {}

  // Método para obtener todos los productos
  getProductos() {
    return this.productos;
  }

  // Método para obtener un producto por su id
  getProductoById(id: number) {
    return this.productos.find((producto) => producto.id === id);
  }
}
