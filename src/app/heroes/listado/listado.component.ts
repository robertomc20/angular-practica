import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];

  heroesBorrados: string[] = [];

  borrarHeroe() {
    const heroeBorrado = this.heroes.shift();
    this.heroesBorrados.push(heroeBorrado);
    console.log(this.heroesBorrados);
  }

}
