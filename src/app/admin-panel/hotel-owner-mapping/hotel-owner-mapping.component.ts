import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DailogComponent } from '../../dailog/dailog.component';
import { ApiService } from '../../Service/api.service';
import { DataService } from '../../Service/data.service';

@Component({
  selector: 'app-hotel-owner-mapping',
  templateUrl: './hotel-owner-mapping.component.html',
  styleUrls: ['./hotel-owner-mapping.component.scss']
})
export class HotelOwnerMappingComponent implements OnInit {
  hotelDetails: any;
  ownerDetails: any;
  formMapping: FormGroup;
  ownername: any;
  mappingResponse: any;
  mappingList: any;

  constructor(private builder: FormBuilder, private apiService: ApiService, private dailog: MatDialog, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.getHotelName();
    this.getOwnerName();
    this.mappingForm();
    this.getMappingList();
  }

  mappingForm() {
    this.formMapping = this.builder.group({
      hotelname: ['', Validators.required],
      username: ['', Validators.required],
      ownername: ['', Validators.required],
    })
  }
  getHotelName() {
    this.apiService.getHotels().subscribe(response => {
      this.hotelDetails = response;
    })
  }

  getOwnerName() {
    this.apiService.getOwnerDetail().subscribe(response => {
      this.ownerDetails = response;
    })
  }

  setOwnerName(phone) {
    console.log('owner phone' + phone);

    this.ownerDetails.forEach(element => {
      if (element.ownerphone == phone) {
        this.ownername = element.ownername

      }
    });
    this.formMapping.patchValue({
      ownername: this.ownername,
    })

  }

  mapHotel(req) {
    console.log("mapping req " + JSON.stringify(req));
    this.apiService.addHotelMapping(req).subscribe(response => {
      console.log('hotel map response ' + JSON.stringify(response));
      this.mappingResponse = response;
      this.addphoneToHotel(req.username,req.hotelname);
      this.dataService.dailogText = this.mappingResponse.description;
      this.dailog.open(DailogComponent);
      setTimeout(() => {
        this.dailog.closeAll()
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/Admin/hotelMapping'])
      }, 1000);
    })
  }

  getMappingList(){
    this.apiService.getHotelMapping().subscribe(response => {
      this.mappingList = response;
    })
  }

  //add owner number in hotel detail table
  addphoneToHotel(username?,hotelname?){
    let request = {
      "username":username,
      "hotelname":hotelname
    }

    this.apiService.addPhoneMapping(request).subscribe(response => {
      console.log('phone updated');
      
    })
  }
}
