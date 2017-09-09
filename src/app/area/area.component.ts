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
    }else if(value.length == 0){
      this.areaAnswer = "";
    }else{
      switch(optionOne){
      case 'Square Inches':
        result = (parseInt(value)*6.4516);
        break;
      case 'Square Feet':
        result = (parseInt(value)*929.0304);
        break;
      case 'Square Yards':
        result = (parseInt(value)*8361.2736);
        break;
      case 'Square Miles':
        result = (parseInt(value)*25899881103.36);
        break;
      case 'Square Millimeters':
        result = (parseInt(value)*0.01);
        break;
      case 'Square Centimeters':
        result = (parseInt(value)*1);
        break;
      case 'Square Meters':
        result = (parseInt(value)*10000);
        break;
      case 'Square Kilometers':
        result = (parseInt(value)*10000000000);
        break;
      case 'Acres':
        result = (parseInt(value)*40468564.224);
        break;
      case 'Hectares':
        result = (parseInt(value)*100000000);
        break;
    }
    switch(optionTwo){
      case 'Square Inches':
        this.areaAnswer = (Math.round(((result)/6.4516)*10000)/10000).toString();
        break;
      case 'Square Feet':
        this.areaAnswer = (Math.round(((result)/929.0304)*10000)/10000).toString();
        break;
      case 'Square Yards':
        this.areaAnswer = (Math.round(((result)/8361.2736)*10000)/10000).toString();
        break;
      case 'Square Miles':
        this.areaAnswer = (Math.round(((result)/25899881103.36)*10000)/10000).toString();
        break;
      case 'Square Millimeters':
        this.areaAnswer = (Math.round(((result)/0.01)*10000)/10000).toString();
        break;
      case 'Square Centimeters':
        this.areaAnswer = result;
        break;
      case 'Square Meters':
        this.areaAnswer = (Math.round(((result)/10000)*10000)/10000).toString();
        break;
      case 'Square Kilometers':
        this.areaAnswer = (Math.round(((result)/10000000000)*10000)/10000).toString();
        break;
      case 'Acres':
        this.areaAnswer = (Math.round(((result)/40468564.224)*10000)/10000).toString();
        break;
      case 'Hectares':
        this.areaAnswer = (Math.round(((result)/100000000)*10000)/10000).toString();
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
