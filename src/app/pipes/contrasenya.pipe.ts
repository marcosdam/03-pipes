import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenya'
})
export class ContrasenyaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true): string {
    return ( mostrar ) ? '*'.repeat(value.length) : value  ;
  }

}
