import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  areaNumber: string;
  areaFirst: string;
  areaSecond: string;
  areaAnswer: string;
  
  calculateArea(value, optionOne, optionTwo){
    var result;
    if(optionOne == optionTwo){
      this.areaAnswer = value;
    }else{
      switch(optionOne){
      case 'Square Inches':
        result = (parseInt(value)*6.4516).toString();
        break;
      case 'Square Feet':
        result = (parseInt(value)*929.0304).toString();
        break;
      case 'Square Yards':
        result = (parseInt(value)*8361.2736).toString();
        break;
      case 'Square Miles':
        result = (parseInt(value)*25899881103.36).toString();
        break;
      case 'Square Millimeters':
        result = (parseInt(value)*0.01).toString();
        break;
      case 'Square Centimeters':
        result = (parseInt(value)*1).toString();
        break;
      case 'Square Meters':
        result = (parseInt(value)*10000).toString();
        break;
      case 'Square Kilometers':
        result = (parseInt(value)*10000000000).toString();
        break;
      case 'Acres':
        result = (parseInt(value)*40468564.224).toString();
        break;
      case 'Hectares':
        result = (parseInt(value)*100000000).toString();
        break;
    }
    switch(optionTwo){
      case 'Square Inches':
        this.areaAnswer = ((Math.round((parseInt(result)/6.4516)*100))/100).toString();
        break;
      case 'Square Feet':
        this.areaAnswer = ((Math.round((parseInt(result)/929.0304)*100))/100).toString();
        break;
      case 'Square Yards':
        this.areaAnswer = ((Math.round((parseInt(result)*8361.2736)*100))/100).toString();
        break;
      case 'Square Miles':
        this.areaAnswer = ((Math.round((parseInt(result)/25899881103.36)*100))/100).toString();
        break;
      case 'Square Millimeters':
        this.areaAnswer = ((Math.round((parseInt(result)/0.01)*100))/100).toString();
        break;
      case 'Square Centimeters':
        this.areaAnswer = ((Math.round((parseInt(result)/1)*100))/100).toString();
        break;
      case 'Square Meters':
        this.areaAnswer = ((Math.round((parseInt(result)/10000)*100))/100).toString();
        break;
      case 'Square Kilometers':
        this.areaAnswer = ((Math.round((parseInt(result)/10000000000)*100))/100).toString();
        break;
      case 'Acres':
        this.areaAnswer = ((Math.round((parseInt(result)/40468564.224)*100))/100).toString();
        break;
      case 'Hectares':
        this.areaAnswer = ((Math.round((parseInt(result)/100000000)*100))/100).toString();
        break;
      }
    }
  }
  
  
  
  constructor(){
    
  }

  ngOnInit() {
    this.areaNumber = '0';
    this.areaAnswer = '0';
    this.areaFirst = 'Square Inches';
    this.areaSecond = 'Square Inches';
  }

}
