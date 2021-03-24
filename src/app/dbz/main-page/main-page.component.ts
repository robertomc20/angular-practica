import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 5000
  }

  // Aqui inyectamos el servicio en este componente
  // Se conoce como una "Inyección de dependencias"
  constructor() { }

}
