import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
moment.locale('it');

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment(value).format('LL');
  }

}
