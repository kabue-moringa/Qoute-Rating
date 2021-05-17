// import { Output } from '@angular/core';
import { Component, OnInit,  Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  // tslint:disable-next-line:no-non-null-assertion
  newQuote = new Quote(0, '',   '',  new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quote>();

  // tslint:disable-next-line:typedef
  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  }

}

