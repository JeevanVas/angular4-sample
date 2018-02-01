import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data-tdf',
  templateUrl: './user-data-tdf.component.html',
  styleUrls: ['./user-data-tdf.component.css']
})
export class UserDataTdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  newValue:any;
  //myName: string = 'Jeevan';
  myEmail: any = "g1@email.com";

  onSubmit(value: any){
    console.dir(value);
    this.newValue = JSON.stringify(value);
    console.log('Form submit value :'+this.newValue)    
  }  

}
