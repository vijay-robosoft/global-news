import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPi'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], field:string, value: any): any[] {
    if(!items) return [];
    if(!value) return items;


    return items.filter( str => {
          return str.title.toLowerCase().includes(value.title.toLowerCase());
        });
   }

}
