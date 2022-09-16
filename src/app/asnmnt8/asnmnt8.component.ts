import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-asnmnt8',
  templateUrl: './asnmnt8.component.html',
  styleUrls: ['./asnmnt8.component.css']
})
export class Asnmnt8Component implements OnInit {

  constructor() { }
  @ViewChild('input') inputElement !:ElementRef;
  newDigit !:any;
  list : number[]=[3,4534,743,4523,634,453];
  addNew(){
    if(this.newDigit == null){
      return;
    }
    this.list.push(this.newDigit)
    this.newDigit = null
    this.input.focus()
  }
  get input():HTMLInputElement{
    return this.inputElement.nativeElement;
  }

  ngOnInit(): void {
  }

}
