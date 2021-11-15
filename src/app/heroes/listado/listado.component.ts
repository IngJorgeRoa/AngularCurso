import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['JORGE', 'KARLA','GREGORIO', 'CAPITAN AMERICA'];
  
  heroeBorrado: string = '';

  BorrarHeroe(){
    this.heroeBorrado =   this.heroes.shift() || ''; 
  }

}
