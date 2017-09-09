import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent implements OnInit {
  volumeNumber: string;
  volumeFirst: string;
  volumeSecond: string;
  volumeAnswer: string;
  
  calculateVolume(value, optionOne, optionTwo){
    var result;
    if(optionOne == optionTwo){
      this.volumeAnswer = value;
    }
    else if(value.length == 0){
      this.volumeAnswer = "";
    }else{
      switch(optionOne){
        case 'Cubic Inches':
          result = (parseInt(value)*0.0163871);
          break;
        case 'Cubic Feet':
          result = (parseInt(value)*28.3168);
          break;
        case 'Imperial Gallons':
          result = (parseInt(value)*4.54609);
          break;
        case 'Imperial Quarts':
          result = (parseInt(value)*1.13652);
          break;
        case 'Imperial Pints':
          result = (parseInt(value)*0.568261);
          break;
        case 'Imperial Cups':
          result = (parseInt(value)*0.284131);
          break;
        case 'Imperial Ounces':
          result = (parseInt(value)*0.0284131);
          break;
        case 'Imperial Tablespoons':
          result = (parseInt(value)*0.0177582);
          break;
        case 'Imperial Teaspoons':
          result = (parseInt(value)*0.00591939);
          break;
        case 'US Gallons':
          result = (parseInt(value)*3.78541);
          break;
        case 'US Quarts':
          result = (parseInt(value)*0.946353);
          break;
        case 'US Pints':
          result = (parseInt(value)*0.473176);
          break;
        case 'US Cups':
          result = (parseInt(value)*0.24);
          break;
        case 'US Ounces':
          result = (parseInt(value)*0.0284131);
          break;
        case 'US Tablespoons':
          result = (parseInt(value)*0.0147868);
          break;
        case 'US Teaspoons':
          result = (parseInt(value)*0.00492892);
          break;
        case 'Cubic Centimeters':
          result = (parseInt(value)*0.001);
          break;
        case 'Cubic Meters':
          result = (parseInt(value)*1000);
          break;
        case 'Liters':
          result = (parseInt(value)*1);
          break;
        case 'Milliliters':
          result = (parseInt(value)*0.001);
          break;
      }
      switch(optionTwo){
        case 'Cubic Inches':
          this.volumeAnswer = ((result)/0.0163871).toString();
          break;
        case 'Cubic Feet':
          this.volumeAnswer = ((result)/28.3168).toString();
          break;
        case 'Imperial Gallons':
          this.volumeAnswer = ((result)/4.54609).toString();
          break;
        case 'Imperial Quarts':
          this.volumeAnswer = ((result)/1.13652).toString();
          break;
        case 'Imperial Pints':
          this.volumeAnswer = ((result)/0.568261).toString();
          break;
        case 'Imperial Cups':
          this.volumeAnswer = ((result)/0.284131).toString();
          break;
        case 'Imperial Ounces':
          this.volumeAnswer = ((result)/0.0284131).toString();
          break;
        case 'Imperial Tablespoons':
          this.volumeAnswer = ((result)/0.0177582).toString();
          break;
        case 'Imperial Teaspoons':
          this.volumeAnswer = ((result)/0.00591939).toString();
          break;
        case 'US Gallons':
          this.volumeAnswer = ((result)/3.78541).toString();
          break;
        case 'US Quarts':
          this.volumeAnswer = ((result)/0.946353).toString();
          break;
        case 'US Pints':
          this.volumeAnswer = ((result)/0.473176).toString();
          break;
        case 'US Cups':
          this.volumeAnswer = ((result)/0.24).toString();
          break;
        case 'US Ounces':
          this.volumeAnswer = ((result)/0.0295735).toString();
          break;
        case 'US Tablespoons':
          this.volumeAnswer = ((result)/0.0147868).toString();
          break;
        case 'US Teaspoons':
          this.volumeAnswer = ((result)/0.00492892).toString();
          break;
        case 'Cubic Centimeters':
          this.volumeAnswer = ((result)/0.001).toString();
          break;
        case 'Cubic Meters':
          this.volumeAnswer = ((result)/1000).toString();
          break;
        case 'Liters':
          this.volumeAnswer = result;
          break;
        case 'Milliliters':
          this.volumeAnswer = ((result)/0.001).toString();
          break;
      }
    }
  }
  
  constructor() { }

  ngOnInit() {
    this.volumeNumber = '0';
    this.volumeAnswer = '0';
    this.volumeFirst = 'Cubic Inches';
    this.volumeSecond = 'Cubic Inches';
  }

}