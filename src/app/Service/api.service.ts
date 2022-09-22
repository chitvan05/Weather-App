import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //getWheater(cityName){
  // const city = cityName
   // return  this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+',India&APPID=7e9948860776a38025b1eddaf3a3b223')
 // }

  //getCountryList(){
  //  return  this.http.get('https://countriesnow.space/api/v0.1/countries/iso')
  //}
  //getCounrtyAndCityList(){
  //  return this.http.get('https://countriesnow.space/api/v0.1/countries');
  //}

  login(request){
    return  this.http.post('http://localhost:8080/login/',request)
  }

  //get name of all the cities
  getCityList(){
    return  this.http.get('http://localhost:8080/city')
  }

  //add city 
  addCity(request){
    return  this.http.post('http://localhost:8080/city',request)
  }

  //add hotel owner
  addOwner(request){
    return  this.http.post('http://localhost:8080/hotelowner',request)
  }

  //get all hotel owner detail
  getOwnerDetail(){
    return  this.http.get('http://localhost:8080/hotelowner')
  }

  //add hotel Details
  addHotel(request){
    return  this.http.post('http://localhost:8080/hotelDetails',request)
  }

  //get list of all the hotel Details
  getHotels(){
    return  this.http.get('http://localhost:8080/hotelDetails/')
  }

  //create hotel owner user while adding the hotel owner
  addUser(request){
    return  this.http.post('http://localhost:8080/addUser',request)
  }

  //get all the hotel Info for all hotels
  getHotelInfo(){
    return  this.http.get('http://localhost:8080/hotelinfo/')
  }

  // add info for specfic hotel
  addHotelInfo(request){
    return  this.http.post('http://localhost:8080/hotelinfo',request)
  }

  //add hotel and owner mapping
  addHotelMapping(request){
    return  this.http.post('http://localhost:8080/hotelMapping',request)
  }

   //add hotel and owner mapping
   addPhoneMapping(request){
    return  this.http.put('http://localhost:8080/hotelDetails',request)
  }

  //change status
  changeStatus(request){
    return  this.http.put('http://localhost:8080/changeStatus',request)
  }
  
   //get hotel and owner mapping list
   getHotelMapping(){
    return  this.http.get('http://localhost:8080/hotelMapping')
  }
}
