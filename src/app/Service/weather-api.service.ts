import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  getWeatherDetails(cityName){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID=2e7e1d8fabd7c153330e11d1f13782d9')
  }

  cityList(){
    let body = {
      "country": "india"
  }
    return this.http.post('https://countriesnow.space/api/v0.1/countries/cities',body);
  }
}
