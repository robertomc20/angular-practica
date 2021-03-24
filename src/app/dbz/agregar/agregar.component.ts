import { Component, Input, Output , EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };


  constructor( private dbzService: DbzService) {

  }


  // Funciona igual que el input, pero sirve para emitir eventos
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  // De esta manera, no se refresca la pág al realizar un form
  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ) { return; }

    //this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}
