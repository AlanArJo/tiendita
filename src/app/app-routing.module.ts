import { NgModule } from '@angular/core';
import {provideRouter, RouterModule, Routes, withComponentInputBinding} from '@angular/router';
import {InicioComponent} from "./paginas/inicio/inicio.component";
import {ProductosComponent} from "./paginas/productos/productos.component";
import {ProductoComponent} from "./paginas/producto/producto.component";

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:id', component: ProductoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes,withComponentInputBinding())]
})
export class AppRoutingModule { }
