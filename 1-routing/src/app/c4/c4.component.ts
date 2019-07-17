import { Component, OnInit, ViewChild, Input,ElementRef, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {
@Input('parentData') message;
@Output() childEvent=new EventEmitter();
@ViewChild('inputElement',{static:false}) inputElement:HTMLInputElement;

  constructor() { }

  ngOnInit() {
  }
  fireEvent($event,inputElement:HTMLInputElement){
    this.childEvent.emit(inputElement.value)
    
    }
}
