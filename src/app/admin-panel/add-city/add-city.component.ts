import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DailogComponent } from '../../dailog/dailog.component';
import { ApiService } from '../../Service/api.service';
import { DataService } from '../../Service/data.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {
  cityList: any;
  cityName:any;
  cityData: any;

  constructor(private apiService:ApiService, private dailog :MatDialog, private router : Router,private dataService:DataService) { }

  ngOnInit(): void {
    this.getCityList();
  }

openDailog(){
this.dailog.open(DailogComponent)
}

  addCity(){
    let request = {
      "cityname":this.cityName
    }
    this.apiService.addCity(request).subscribe(response => {
    this.cityData = response;
    this.dataService.dailogText = this.cityData.description;
    this.dailog.open(DailogComponent);
    setTimeout(() => {
      this.dailog.closeAll();
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/Admin/city'])
    }, 1000);
      console.log("city list " + JSON.stringify(response));
      
      }, (err) => {
     
      });
  }

 getCityList(){
    this.apiService.getCityList().subscribe(response => {
      this.cityList = response;
      console.log("city list " + JSON.stringify(this.cityList));
      
      }, (err) => {
     
      });
  }
}
