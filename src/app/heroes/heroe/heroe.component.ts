import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45;

    // Esto es un getter
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad}`;
        //lo de arriba es js, basicamente es lo mismo que hacer lo sgte:
        // return this.nombre + ' - ' + this.edad;
        //se usa de la forma de arriba ya que en forma de template es mas facil insertar valores
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}