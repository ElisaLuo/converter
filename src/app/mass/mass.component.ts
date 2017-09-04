import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.css']
})
export class MassComponent implements OnInit {
  massNumber: string;
  massFirst: string;
  massSecond: string;
  massAnswer: string;
  
  calculateMass(value, optionOne, optionTwo){
    var result;
    if(optionOne == optionTwo){
      this.massAnswer = value;
    }else{
      switch(optionOne){
        case 'Ounces':
          result = (parseInt(value)*0.0283495).toString();
          break;
        case 'Pounds':
          result = (parseInt(value)*0.453592).toString();
          break;
        case 'Stones':
          result = (parseInt(value)*6.35029).toString();
          break;
        case 'Long Tons':
          result = (parseInt(value)*1016.05).toString();
          break;
        case 'Short Tons':
          result = (parseInt(value)*907.185).toString();
          break;
        case 'Milligrams':
          result = (parseInt(value)*0.000001).toString();
          break;
        case 'Grams':
          result = (parseInt(value)*0.001).toString();
          break;
        case 'Kilograms':
          result = (parseInt(value)*1).toString();
          break;
        case 'Metric Tonnes':
          result = (parseInt(value)*1000).toString();
          break;
      }
      switch(optionTwo){
        case 'Ounces':
          this.massAnswer = (Math.round((parseInt(result)/0.0283495)*10000)/10000).toString();
          break;
        case 'Pounds':
          this.massAnswer = (Math.round((parseInt(result)/0.453592)*10000)/10000).toString();
          break;
        case 'Stones':
          this.massAnswer = (Math.round((parseInt(result)/6.35029)*10000)/10000).toString();
          break;
        case 'Long Tons':
          this.massAnswer = (Math.round((parseInt(result)/1016.05)*10000)/10000).toString();
          break;
        case 'Short Tons':
          this.massAnswer = (Math.round((parseInt(result)/907.185)*10000)/10000).toString();
          break;
        case 'Milligrams':
          this.massAnswer = (Math.round((parseInt(result)/0.000001)*10000)/10000).toString();
          break;
        case 'Grams':
          this.massAnswer = (Math.round((parseInt(result)/0.001)*10000)/10000).toString();
          break;
        case 'Kilograms':
          this.massAnswer = (Math.round((parseInt(result)/1)*10000)/10000).toString();
          break;
        case 'Metric Tonnes':
          this.massAnswer = (Math.round((parseInt(result)/1000)*10000)/10000).toString();
          break;
      }
    }
  }
  
  constructor() { }

  ngOnInit() {
    this.massNumber = '0';
    this.massAnswer = '0';
    this.massFirst = 'Ounces';
    this.massSecond = 'Ounces';
  }

}

/* to kilo
ounce = 0.0283495
pound = 0.453592
stone = 6.35029
long ton = 1016.05
short ton = 907.185
milli = 0.000001
gram = 0.001
kilo = 1
metric = 1000
*/