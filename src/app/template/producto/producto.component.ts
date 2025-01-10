import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: any;  // Aquí se almacenará el producto seleccionado

  constructor(
    private route: ActivatedRoute,  // Para obtener el ID de la URL
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    // Obtenemos el ID del producto desde la URL
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.producto = this.productosService.getProductoById(id);  // Obtenemos el producto por su ID
  }
}

