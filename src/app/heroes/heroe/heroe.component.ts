import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})


export class HeroeComponent{
   nombre: string = 'iroman';
   edad: number = 23;
   poder: string = 'riqueza';

   //CREAR GET PARA CREAR UNA PROPIEDAD CUANDO LA LLAME SERA PROCESADA 

   get nombreCapitalizado(){
        return this.nombre.toUpperCase();
   }

   //metodo de retornar nombre
   Obtenernombre(): string{
       
        return ` ${ this.nombre } - ${ this.edad } `;
   }

   cambiarNombre(): void{
        this.nombre = 'Spiderman';

   }

   cambiarEdad(): void{
       this.edad = 50;
   }

}