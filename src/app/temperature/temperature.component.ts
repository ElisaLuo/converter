import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  tempNumber: string;
  tempFirst: string;
  tempSecond: string;
  tempAnswer: string;
  
  calculateTemp(value, optionOne, optionTwo){
    if(optionOne == optionTwo){
      this.tempAnswer = value;
    }else if(optionOne == "Kelvin"){
      switch(optionTwo){
        case 'Celcius':
          this.tempAnswer = (Math.round((parseInt(value)-273.15)*100)/100).toString();
          break;
        case 'Fahrenheit':
          this.tempAnswer = (Math.round((((parseInt(value)-305.15)*5)/9)*100)/100).toString();
          break
      }
    }else if(optionOne == "Celcius"){
      switch(optionTwo){
        case 'Kelvin':
          this.tempAnswer = (Math.round((parseInt(value)+273.15)*100)/100).toString();
          break;
        case 'Fahrenheit':
          this.tempAnswer = (Math.round((((parseInt(value)*9)/5)+32)*100)/100).toString();
          break;
      }
    }else if(optionOne == "Fahrenheit"){
      switch(optionTwo){
        case 'Kelvin':
          this.tempAnswer = (Math.round(((((parseInt(value)-32)*5)/9)+273.15)*100)/100).toString();
          break;
        case 'Celcius':
          this.tempAnswer = (Math.round((((parseInt(value)-32)*5)/9)*100)/100).toString();
          break;
      }
    }
  }
  constructor() { }

  ngOnInit() {
    this.tempNumber = '0';
  }

}
