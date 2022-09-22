import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-add-hotel-info',
  templateUrl: './add-hotel-info.component.html',
  styleUrls: ['./add-hotel-info.component.scss']
})
export class AddHotelInfoComponent implements OnInit {
  HotelInfoForm: FormGroup;
  hotelDetails: any;
  constructor(private build: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
   this.hotelForm();
   this.getHotelName();
  }
  
  //create form group
  hotelForm(){
    this.HotelInfoForm = this.build.group({
      hotelname: ['', Validators.required],
      status: ['', Validators.required],
      singleroom: ['', Validators.required],
      singleroomprice: ['', [Validators.required, Validators.email]],
      doubleroom: ['', Validators.required],
      doubleroomprice: ['', Validators.required],
      familyroom: ['', Validators.required],
      familyroomprice: ['', Validators.required],
      hotelrating: ['', Validators.required]
    })
  }

  getHotelName(){
    this.apiService.getHotels().subscribe(response =>{
      this.hotelDetails = response;
      this.HotelInfoForm.patchValue({
        hotelname:this.hotelDetails[0].hotelname
      })
    })
   
  }

  addHotelInfo(data){
    
    console.log('hotel info ' + JSON.stringify(data));
    this.apiService.addHotelInfo(data).subscribe(response =>{
      console.log( 'hotel add response ' + JSON.stringify(response));
      this.changeStatus(data.status,data.hotelname);
    })
  }

  changeStatus(status?,hotelname?){
    let request = {
      "status":status,
      "hotelname":hotelname
    }

    this.apiService.changeStatus(request).subscribe(response => {
      console.log('status updated');
      
    })
  }
}
