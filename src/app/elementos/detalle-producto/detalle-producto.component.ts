import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent {
  @Input() imagen: string = '';
  @Input() titulo: string = '';
  @Input() precio: string = '';
  @Input() id: any ;

  @Output() clic = new EventEmitter<string>();

constructor(private router:Router) {
}

  verProducto(id:any){
  this.router.navigate([`/producto/${id}`])

  }
}
