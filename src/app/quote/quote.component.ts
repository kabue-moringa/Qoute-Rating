import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote[] = [
    new Quote (1, 'You will face many defeats in life but never let yourself defeated', 'MAYA ANGELOU', new Date(2022, 9, 14)),
    new Quote (2, 'The way i see it, if you want the rainbow, you gotta put up with the rain', 'DOLLY PARTON', new Date(2020, 6, 6)),
    new Quote (3, 'Always deliver more than expected', 'LARRY PAGE', new Date(2022, 1, 12)),
    new Quote (4, 'You get what you give ', 'JENNIFER LOPEZ', new Date(2018, 9, 18)),
    new Quote (5, ' Make each day your masterpiece',  'JOHN WOODEN', new Date(2021, 2, 14)),
    new Quote (6, 'Criticism makes you strong', 'LEBRON LAMES', new Date(2021, 9, 14)),
  ];
  // tslint:disable-next-line:typedef
  addNewQuote(quote: Quote){

    // tslint:disable-next-line:prefer-const
    let QuoteLength = this.quote.length;
    quote.id = QuoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quote.push(quote);
  }

  // tslint:disable-next-line:typedef
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {

      // tslint:disable-next-line:prefer-const
      let toDelete = confirm('Are you sure you want to delete ${this.quotes[index].name}?');
      if (toDelete){
        this.quote.splice(index, 1);
      }

    }
  }

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  }

}
