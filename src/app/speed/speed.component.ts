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
    }else{
      switch(optionOne){
        case 'Feet per second':
          result = (Math.round((parseInt(value)*0.592484)*10000)/10000).toString();
          break;
        case 'Miles per hour':
          result = (Math.round((parseInt(value)*0.868976)*10000)/10000).toString();
          break;
        case 'Meters per second':
          result = (Math.round((parseInt(value)*1.94384)*10000)/10000).toString();
          break;
        case 'Kilometers per hour':
          result = (Math.round((parseInt(value)*0.539957)*10000)/10000).toString();
          break;
        case 'Knots':
          result = (parseInt(value)*1).toString();
          break;
      }
      switch(optionTwo){
        case 'Feet per second':
          this.speedAnswer = ((Math.round((parseInt(result)/0.592484)*10000))/10000).toString();
          break;
        case 'Miles per hour':
          this.speedAnswer = ((Math.round((parseInt(result)/0.868976)*10000))/10000).toString();
          break;
        case 'Meters per second':
          this.speedAnswer = ((Math.round((parseInt(result)/1.94384)*10000))/10000).toString();
          break;
        case 'Kilometers per hour':
          this.speedAnswer = ((Math.round((parseInt(result)/0.539957)*10000))/10000).toString();
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
  }
}

/* to knot
foot = 0.592484
miles = 0.868976
meter = 1.94384
kilo = 0.539957
knot = 1

*/
