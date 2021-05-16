import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  // tslint:disable-next-line:no-non-null-assertion
  newQuote = new Quote(0, '',   '',  new Date!());
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  }

}
function newDate(): any {
  throw new Error('Function not implemented.');
}

