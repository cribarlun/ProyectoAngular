import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {

  transform(value: string, args?: any): string {//recibe un string y devuelve un string

    return value.replace(/<(?:.|\n)*?/gm, '');// /gm para que no distinga mayusculas y minusculas. reemplaza los caracteres dichos por nada

  }

}
