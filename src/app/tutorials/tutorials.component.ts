import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css'],
  inputs: ['parentData'],
  outputs: ['childEvent']
})

export class TutorialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public title = "Able to include 1 component in the main component. Tutorials works!";
  public imgLink = "http://lorempixel.com/400/200/";
  public applyClass = true;
  public applyOrange = true;
  public fname;
  public lname;
  public showElement = true;
  public color = 'red';
  public colors = ['red','blue','green'];
  public cOne = true;
  public cTwo = true;
  public style = 'italic';
  public size = '30px';
  public parentData: string;
  childEvent = new EventEmitter<string>();
  name = 'TheJeevan';
  date = new Date();

  onClick(value){
    console.log('Event handling :'+value);
    alert('event binding and references')
  }
  toggle(){
    this.cOne = !this.cOne;
    this.cTwo = !this.cTwo;
  }
  onChange(value:string){
    this.childEvent.emit(value);
  }
}
