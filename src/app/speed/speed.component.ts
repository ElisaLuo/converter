import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {
  speedNumber: string;
  speedFirst: string;
  speedSecond: string;
  speedAnswer: string;
  
  calculateSpeed(value, optionOne, optionTwo){
    var result;
    if(optionOne == optionTwo){
      this.speedAnswer = value;
    }else if(value.length == 0){
      this.speedAnswer = "";
    }else{
      switch(optionOne){
        case 'Feet per second':
          result = (parseInt(value)*0.592484);
          break;
        case 'Miles per hour':
          result = (parseInt(value)*0.868976);
          break;
        case 'Meters per second':
          result = (parseInt(value)*1.94384);
          break;
        case 'Kilometers per hour':
          result = (parseInt(value)*0.539957);
          break;
        case 'Knots':
          result = (parseInt(value));
          break;
      }
      switch(optionTwo){
        case 'Feet per second':
          this.speedAnswer = ((result)/0.592484).toString();
          break;
        case 'Miles per hour':
          this.speedAnswer = ((result)/0.868976).toString();
          break;
        case 'Meters per second':
          this.speedAnswer = ((result)/1.94384).toString();
          break;
        case 'Kilometers per hour':
          this.speedAnswer = ((result)/0.539957).toString();
          break;
        case 'Knots':
          this.speedAnswer = result;
          break;
      }
    }
  }
  constructor() { }

  ngOnInit() {
    this.speedAnswer = '0';
    this.speedNumber = '0';
    this.speedFirst = 'Feet per second';
    this.speedSecond = 'Feet per second';
  }
}

/* to knot
foot = 0.592484
miles = 0.868976
meter = 1.94384
kilo = 0.539957
knot = 1

*/
