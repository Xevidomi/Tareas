import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeTareaComponent } from './home-tarea/home-tarea.component';
import { TareaComponent } from './tarea/tarea.component';
import { AppRoutingModule } from './app-routing.module'; // Importar el módulo de rutas
import { ProductoComponent } from './template/producto/producto.component';
import { HomeEcommerceComponent } from './templates/home-ecommerce/home-ecommerce.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTareaComponent,
    TareaComponent,
    ProductoComponent,
    HomeEcommerceComponent,
  ],
  imports: [
    AppRoutingModule // Asegúrate de añadirlo aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
