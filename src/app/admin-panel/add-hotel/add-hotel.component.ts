import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DailogComponent } from '../../dailog/dailog.component';
import { ApiService } from '../../Service/api.service';
import { DataService } from '../../Service/data.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit {
  addHotelForm : FormGroup;
  addHotelResponse: any;
  constructor(private builder : FormBuilder,private apiService: ApiService,private dailog :MatDialog, private router : Router,private dataService:DataService) { }

  ngOnInit(): void {
    this.addHotelForm = this.builder.group({
      hotelName: ['', Validators.required],
      //hotelLocation: ['', Validators.required],
      HotelAddressL1: ['', Validators.required],
      HotelAddressL2: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      status:['', Validators.required],
      // hotelOwnerName: ['', Validators.required],
      // mobilenumber: ['', Validators.required],
      // email: ['', Validators.required],
      // ownerAddL1: ['', Validators.required],
      // ownerAddL2: ['', Validators.required],
      // ownerState: ['', Validators.required],
      // ownerCity: ['', Validators.required],
      // ownerPincode: ['', Validators.required],
      // accountNumber: ['', Validators.required],
      // accountHolderName: ['', Validators.required],
      // ifscCode: ['', Validators.required],
      // branchName: ['', Validators.required],
      // micrCode: ['', Validators.required],
    });
    this.addHotelForm.patchValue({
      status:"inactive"
    })
  }

  addHotelDetails(data){
    
    data["ownerphone"] = "0";
    data.status = "inactive";
    let request = data
    console.log('add hotel req' + JSON.stringify(request));
    
    this.apiService.addHotel(request).subscribe(response => {
      this.addHotelResponse = response;
      console.log("add hotel response  " + JSON.stringify(response));
      this.dataService.dailogText = this.addHotelResponse.description;
      this.dailog.open(DailogComponent);
      setTimeout(() => {
        this.dailog.closeAll();
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/Admin/hotelListing']);
      }, 1000);
    }, (err) => {
    });
  } 
  
  
}
