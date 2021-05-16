import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotePipe'
})
export class QuotePipePipe implements PipeTransform {

  transform(value: any): number {
    // tslint:disable-next-line:prefer-const
    let today: Date = new Date();
    // tslint:disable-next-line:prefer-const
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // tslint:disable-next-line:prefer-const
    let dateDifference = Math.abs(value - todayWithNoTime);
    const secondsInDay = 86400;
    // tslint:disable-next-line:prefer-const
    let dateDifferenceSeconds = dateDifference * 0.001;
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:no-var-keyword
    // tslint:disable-next-line:prefer-const
    let dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }
}
