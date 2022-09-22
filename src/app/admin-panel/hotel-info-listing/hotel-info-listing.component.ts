import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-hotel-info-listing',
  templateUrl: './hotel-info-listing.component.html',
  styleUrls: ['./hotel-info-listing.component.scss']
})
export class HotelInfoListingComponent implements OnInit {
  HotelInfo: any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getHotelInfo().subscribe(response => {
      console.log('hotel info ' + JSON.stringify(response));
      this.HotelInfo = response
      
      }, (err) => {
     
      });
  }

}
