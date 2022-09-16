import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asnmnt6',
  templateUrl: './asnmnt6.component.html',
  styleUrls: ['./asnmnt6.component.css']
})
export class Asnmnt6Component implements OnInit {
  employees=[
    {id:1,name:"smith",salary:40000,age:90},
    {id:2,name:"winter",salary:14000,age:70},
    {id:3,name:"allensolley",salary:86000,age:66},
    {id:4,name:"thamos",salary:440000,age:64},
   { id:5,name:"nikolas",salary:162700,age:24},
   {id:6,name:"jeorge",salary:372000,age:50},
   {id:7,name:"Heron ",salary:13500,age:80},
   {id:8,name:"coffee",salary:240000,"age":39}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
