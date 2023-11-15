import {Component, Input} from '@angular/core';
import {ProductosService} from "../../servicios/productos.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  @Input() id:any;
  producto: any;


  constructor( private productosService: ProductosService) {

  }
  ngOnInit() {
    this.productosService.obtenerProducto(this.id).subscribe(
      data => this.producto = data,
      error => console.log(error),
      () => console.log('FIN')
    )
  }

  ngDoCheck(){
    console.log(this.producto)
  }


}
