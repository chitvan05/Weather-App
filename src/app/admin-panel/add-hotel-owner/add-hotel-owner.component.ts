import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-add-hotel-owner',
  templateUrl: './add-hotel-owner.component.html',
  styleUrls: ['./add-hotel-owner.component.scss']
})
export class AddHotelOwnerComponent implements OnInit {
  HotelOwnerForm: FormGroup;
  hotelowneradd: any;
  constructor(private build: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.HotelOwnerForm = this.build.group({
      ownername: ['', Validators.required],
      ownerphone: ['', Validators.required],
      ownermail: ['', [Validators.required, Validators.email]],
      owneraddressl1: ['', Validators.required],
      owneraddressl2: ['', Validators.required],
      ownerstate: ['', Validators.required],
      ownercity: ['', Validators.required],
      ownerpincode: ['', Validators.required]

    })
  }
  addHotelOwnerDetails(data) {
    console.log(' hotel Owner Data ' + JSON.stringify(data));
    let request = data
    //add hotel owner
    this.apiService.addOwner(request).subscribe(response => {
      this.hotelowneradd = response;
      console.log("add owner " + JSON.stringify(response));
      if(this.hotelowneradd.statusCode == "100"){
        let userData = {
          "username":request.ownerphone,
          "password":"12345",
          "role":"hotelowner"
        }
        this.apiService.addUser(userData).subscribe(response => {
          console.log("user credentials added " + JSON.stringify(response));
        })
      }
    }, (err) => {
    });

  }
}
