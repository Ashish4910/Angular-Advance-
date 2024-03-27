import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenodd'
})
export class EvenoddPipe implements PipeTransform {
 
  // console.log("------------------Even odd pipe is executed--------------");
 

  transform(value: any) {

    if (value % 2 == 0) {
      return value + ' is even Number ';
    }

    return value + '  is odd Number ';
  }

}
