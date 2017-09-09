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
    }else if(value.length == 0){
      this.massAnswer = "";
    }else{
      switch(optionOne){
        case 'Ounces':
          result = (parseInt(value)*0.0283495);
          break;
        case 'Pounds':
          result = (parseInt(value)*0.453592);
          break;
        case 'Stones':
          result = (parseInt(value)*6.35029);
          break;
        case 'Long Tons':
          result = (parseInt(value)*1016.05);
          break;
        case 'Short Tons':
          result = (parseInt(value)*907.185);
          break;
        case 'Milligrams':
          result = (parseInt(value)*0.000001);
          break;
        case 'Grams':
          result = (parseInt(value)*0.001);
          break;
        case 'Kilograms':
          result = (parseInt(value)*1);
          break;
        case 'Metric Tonnes':
          result = (parseInt(value)*1000);
          break;
      }
      switch(optionTwo){
        case 'Ounces':
          this.massAnswer = ((result)/0.0283495).toString();
          break;
        case 'Pounds':
          this.massAnswer = ((result)/0.453592).toString();
          break;
        case 'Stones':
          this.massAnswer = ((result)/6.35029).toString();
          break;
        case 'Long Tons':
          this.massAnswer = ((result)/1016.05).toString();
          break;
        case 'Short Tons':
          this.massAnswer = ((result)/907.185).toString();
          break;
        case 'Milligrams':
          this.massAnswer = ((result)/0.000001).toString();
          break;
        case 'Grams':
          this.massAnswer = ((result)/0.001).toString();
          break;
        case 'Kilograms':
          this.massAnswer = result;
          break;
        case 'Metric Tonnes':
          this.massAnswer = ((result)/1000).toString();
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