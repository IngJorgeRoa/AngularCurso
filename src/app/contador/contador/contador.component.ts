import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
})

export class ContadorComponent {
    titulo: string = 'CONTADOR APP';
    numero: number = 5;
    base: number = 5;
  
  /*sumar (){
    this.numero += 1;
  }
    
  restar (){
    this.numero -= 1;
  }*/
  
  acumular(valor: number){
    this.numero += valor;
  }
  
  
  
  
  }