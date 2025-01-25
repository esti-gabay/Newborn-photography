import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {
  transform(name?: string): any {  //value?: string,
    let firstChar = name?.charAt(0);
    let nameF = name?.slice(1).toLowerCase();
    if (firstChar === firstChar?.toLowerCase()) {
      let nameS = firstChar?.toUpperCase();
      return "" + nameS + nameF;
    }
    return "" + firstChar + nameF;
  }
}