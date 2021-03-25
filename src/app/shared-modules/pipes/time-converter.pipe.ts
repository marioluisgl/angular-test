import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})

export class TimeConverterPipe implements PipeTransform {
  transform(tiempoNumero: any): any {
    return (tiempoNumero < 10) ? `0${tiempoNumero}` : `${tiempoNumero}`;
  }
}
