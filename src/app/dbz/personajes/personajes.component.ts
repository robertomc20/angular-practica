import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  // Padre - Hijo
  // Con este input, le decimos a angular que estos personajes vendran desde el 
  // componente padre.
  // En el () del input, puede cambiarse el nombre con que se llamará en el html
  //@Input() personajes: Personaje[] = [];

  // Getter
  get personajes(){
    return this.DbzService.personajes;
  }

  constructor( private DbzService: DbzService ) {
  }

}
