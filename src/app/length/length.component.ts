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
    var result;
    if(optionOne == optionTwo){
      this.lengthAnswer = value;
    }else{
      switch(optionOne){
        case 'Inches':
          result = (parseInt(value)*0.0254).toString()
          break;
        case 'Feet':
          result = (parseInt(value)*0.3048).toString()
          break;
        case 'Yards':
          result = (parseInt(value)*0.9144).toString()
          break;
        case 'Miles':
          result = (parseInt(value)*1609.34).toString()
          break;
        case 'Millimeters':
          result = (parseInt(value)*0.001).toString()
          break;
        case 'Centimeters':
          result = (parseInt(value)*0.01).toString()
          break;
        case 'Meters':
          result = (parseInt(value)*1).toString()
          break;
        case 'Kilometers':
          result = (parseInt(value)*1000).toString()
          break;
      }
      switch (optionTwo){
        case 'Inches':
          this.lengthAnswer = (Math.round((parseInt(result)/0.0254)*100)/100).toString()
          break;
        case 'Feet':
          this.lengthAnswer = (Math.round((parseInt(result)/0.3048)*100)/100).toString()
          break;
        case 'Yards':
          this.lengthAnswer = (Math.round((parseInt(result)/0.9144)*100)/100).toString()
          break;
        case 'Miles':
          this.lengthAnswer = (Math.round((parseInt(result)/1609.34)*100)/100).toString()
          break;
        case 'Millimeters':
          this.lengthAnswer = (Math.round((parseInt(result)/0.001)*100)/100).toString()
          break;
        case 'Centimeters':
          this.lengthAnswer = (Math.round((parseInt(result)/0.01)*100)/100).toString()
          break;
        case 'Meters':
          this.lengthAnswer = result;
          break;
        case 'Kilometers':
          this.lengthAnswer = (Math.round((parseInt(result)/1000)*100)/100).toString()
          break;
      }
    }
  }
  
  constructor(){
    
  }
  ngOnInit() {
    this.lengthAnswer = '0';
    this.lengthNumber = '0';
  }
}

/*meausurements to meters
inch = 0.0254
foot = 0.3048
yard = 0.9144
mile = 1609.34
milli = 0.001
centi = 0.01
meter = 1
kilo = 1000
*/