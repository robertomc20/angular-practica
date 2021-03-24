import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';
// Cabe mencionar que el servicio lo hacemos acá solo porque estamos prácticando
// es a criterio de uno, pero generalmente, se trabajan globalmente.

// El decorador es lo que diferencia el servicio de los demas archivos
@Injectable()
export class DbzService {
    
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    // Getter
    get personajes(): Personaje[]{
        // JS todo lo manda por referencia
        // Para romper eso, se hace de esta manera, con los ...
        // [] = arreglo, ... = operador spread
        // separa cada uno de los elementos independientes que tiene el arreglo, y crea uno nuevo
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        return [...this._personajes];
    }
    

    constructor() {}

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
    }


}