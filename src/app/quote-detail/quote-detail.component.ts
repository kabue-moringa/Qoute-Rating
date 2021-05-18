import { Input, Output } from '@angular/core';
import { Component, OnInit, EventEmitter} from '@angular/core';
import { updateTupleTypeNode } from 'typescript';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
initUpvote = 0;
initdownVote = 0;
  @Input()quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() upvote = new EventEmitter<number>();
  @Output() downvote = new EventEmitter<number>();
  // tslint:disable-next-line:typedef
  quoteDelete(complete: boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  }
// tslint:disable-next-line:typedef
like(){
  this.upvote.emit(this.initUpvote);
}
// tslint:disable-next-line:typedef
dislike(){
  this.upvote.emit(this.initdownVote);
}
}
