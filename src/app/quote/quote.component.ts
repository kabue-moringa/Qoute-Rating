import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote[] = [

    new Quote (1, 'You will face many defeats in life but never let yourself defeated', 'MAYA ANGELOU', new Date(2022, 0, 0), 0, 0),
    new Quote (2, 'The way i see it, if you want the rainbow, you gotta put up with the rain', 'DOLLY PARTON', new Date(2020, 0, 0), 0, 0),
    new Quote (3, 'Always deliver more than expected', 'LARRY PAGE', new Date(2022, 1, 12), 0, 0),
    new Quote (4, 'You get what you give ', 'JENNIFER LOPEZ', new Date(2018, 9, 18), 0, 0),
    new Quote (5, ' Make each day your masterpiece',  'JOHN WOODEN', new Date(2021, 2, 14), 0, 0),
    new Quote (6, 'Criticism makes you strong', 'LEBRON LAMES', new Date(2021, 9, 14), 0, 0),
  ];
  // tslint:disable-next-line:typedef
  addQuote(quote){
    const arraySize = this.quote.length;
    quote.id = arraySize + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quote.push(quote);
  }
// tslint:disable-next-line:typedef
// addQuote(emittedQuote: Quote){
//   this.quote.push(emittedQuote);
// }
// tslint:disable-next-line:typedef
dislike(i: number){
  this.quote[i].dislike += 1;
}
// tslint:disable-next-line:typedef
like(i: number){
  this.quote[i].like += 1;
}
  // tslint:disable-next-line:typedef
  // get sortQuote {
  //   // return this.quote.sort((a, b) => {
  //     // return (new Date(b.dateposted) as any) - (new Date (a.dateposted) as any);
  //   });
  // }
  // tslint:disable-next-line:typedef
  deleteQuote(isComplete, index){
    if (isComplete) {
      // tslint:disable-next-line:prefer-const
      let toDelete = confirm(`Do you want to delete this quote ${this.quote[index].name}?`);
      if (toDelete){
        this.quote.splice(index, 1);
      }

    }
  }
  // tslint:disable-next-line:typedef
  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  // tslint:disable-next-line:typedef
  displayInfo(index){
    this.quote[index].showInfo = !this.quote[index].showInfo;
  }
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  }

}
