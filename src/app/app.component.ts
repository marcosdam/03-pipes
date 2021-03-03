import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'Marcos';
  nombre2: string = 'mArcoS LedESMa PicAZO';
  personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;

  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/V-40vhJRWKI';

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('llegaron los datos');
    }, 4500);
  });
  
  heroe = {
    nombre: 'Logan',
    clase: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}
