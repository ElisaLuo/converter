import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent implements OnInit {
  lengthNumber: string;
  lengthFirst: string;
  lengthSecond: string;
  lengthAnswer: string;
  
  calculateLength(value, optionOne, optionTwo){
    
  }
  
  constructor() { }

  ngOnInit() {
    this.lengthAnswer = '0';
    this.lengthNumber = '0';
  }
}

/*meausurements to meters*/