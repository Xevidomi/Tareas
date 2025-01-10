import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-home-ecommerce',
  templateUrl: './home-ecommerce.component.html',
  styleUrls: ['./home-ecommerce.component.css']
})
export class HomeEcommerceComponent implements OnInit {
  productos: any[] = [];  // Aquí se guardarán todos los productos

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    // Llamamos al servicio para obtener todos los productos
    this.productos = this.productosService.getProductos();
  }
}
