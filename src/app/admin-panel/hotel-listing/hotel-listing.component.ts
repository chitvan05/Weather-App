import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-hotel-listing',
  templateUrl: './hotel-listing.component.html',
  styleUrls: ['./hotel-listing.component.scss']
})
export class HotelListingComponent implements OnInit {
  Hotels: any;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getHotels().subscribe(response => {
      console.log('list of hotels ' + JSON.stringify(response));
      this.Hotels = response
      
      }, (err) => {
     
      });
  }


  
}
