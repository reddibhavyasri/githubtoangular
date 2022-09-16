import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asnmnt4',
  templateUrl: './asnmnt4.component.html',
  styleUrls: ['./asnmnt4.component.css']
})
export class Asnmnt4Component implements OnInit {
  movieslist :any[]= [
    {name :"Bommarillu"},
    {name:"Okkadu"},
    {name:"Bharath Ane Nenu"},
    {name :"Happy Days"},
    {name :"Love Story"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
