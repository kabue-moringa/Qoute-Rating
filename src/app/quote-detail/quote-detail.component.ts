import { Input, Output } from '@angular/core';
import { Component, OnInit, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input()quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  // tslint:disable-next-line:typedef
  quoteDelete(complete: boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  }

}
