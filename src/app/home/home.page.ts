import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
weatherData: any;

data:any;
cityData: any;
city = 'Pretoria';
name : string;
values:any;
date = Date().toString();
date1 = Date.now();
txt;
txt1;
//weather:any;

  constructor( public navCtrl: NavController,
    private service:WeatherService) {

this.service.getWeatherData(this.city).subscribe(data =>{
   this.values = data;
     this.weatherData = this.values.list;
     this.cityData = this.values.city;
     this.name = this.cityData.name;
 
   console.log(data);
  
    
});
this.service.getWeatherData2(this.city).subscribe(data =>{
  this.values = data;
    //this.weather = this.values.list;
    this.cityData = this.values.city;
    this.name = this.cityData.name;

    console.log(data);

    if(this.values.list[0].dt_txt = this.date1){
     this.txt="Today";
    }
    else if(this.values.list[9].dt_txt){
      this.txt1="Tomorrow";
    }
});
} 

  searchCity() {
    this.service.getWeatherData(this.city).subscribe(data =>{ 
      this.values = data;
      this.weatherData = this.values.list;
      this.cityData = this.values.city;
      this.name = this.cityData.name;
 
      console.log(data);
    });
    this.service.getWeatherData2(this.city).subscribe(data =>{
      this.values = data;
      //this.weather= this.values.list;
      this.cityData = this.values.city;
      this.name = this.cityData.name;
 
      console.log(data);
      // // if(this.values.list[0].dt_txt = this.date1){
      // //   this.txt="Today";
      // }
    });
    
}
}