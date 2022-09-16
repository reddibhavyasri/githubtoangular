import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asnmnt5',
  templateUrl: './asnmnt5.component.html',
  styleUrls: ['./asnmnt5.component.css']
})
export class Asnmnt5Component implements OnInit {
  users = [
    { id: 1,name: "Leanne Graham",username: "Bret",email : "Sincere@april.biz" },
    {id: 2,name: "Ervin Howell",username:"Antonette",email : "Shanna@melissa.tv" },
    {id: 3,name:  "Clementine Bauch",username:"Samantha",email :"Nathan@yesenia.net" },
    {id: 4,name: "Patricia Lebsack",username:"Karianne",email : "Julianne.OConner@kory.org "},
    {id: 5,name:"Chelsey Dietrich",username:"Kamren",email : "Lucio_Hettinger@annie.ca"}
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
