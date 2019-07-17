import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

//city ='Pretoria';
appid = '5cb03de23f725e8b2985582df7d03ec4';

  constructor(private http:HttpClient) {
   }
   getWeatherData(city:string) {
   return  this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&cnt=1&APPID=' + this.appid);
   }
   getWeatherData2(city:string) {
    return  this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=' + this.appid);
    }
}
