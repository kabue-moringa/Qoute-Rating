import { Component, OnInit,  Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  // tslint:disable-next-line:no-non-null-assertion
  quoted = new Quote(0, '', '', new Date(), 0, 0);
  @Output() add = new EventEmitter<Quote>();
  // tslint:disable-next-line:typedef
  // }
  // tslint:disable-next-line:typedef
  addQuote(){
    this.add.emit(this.quoted);
    this.quoted = new Quote(0, '', '', new Date(), 0, 0);
      }
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  }

}

