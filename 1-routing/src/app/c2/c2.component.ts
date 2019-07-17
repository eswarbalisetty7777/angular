import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
@Input('parentData') message;
c2text;
@Output() childEvent=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
fireEvent(){

  this.childEvent.emit(this.c2text)

}
}
