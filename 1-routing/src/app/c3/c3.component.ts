import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
@ViewChild('message',{static:false}) message;
text="";
dataToSend:string
  constructor() { }

  ngOnInit() {
  }
childEventHandler(message:string){
this.text=message
}
fireEvent(message:HTMLInputElement){
this.dataToSend=message.value
}
}
