import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asnmnt1',
  templateUrl: './asnmnt1.component.html',
  styleUrls: ['./asnmnt1.component.css']
})
export class Asnmnt1Component implements OnInit {
  firstName! : string;
  lastName! : string;
  DOJ! : string;


  constructor() { }

  ngOnInit(): void {
  }

}
