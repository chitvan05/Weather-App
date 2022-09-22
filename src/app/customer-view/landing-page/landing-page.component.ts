import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class LandingPageComponent implements OnInit {

  myInterval: number | false = 6000;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  index: number;
  hotelInfo: any;
  hotelDetails: any;
  mergedInfo: any[]= [];
  cityList: any;
  data: any;

  constructor(private router: Router,private apiService:ApiService) {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }


  
  ngOnDestroy(): void {
    this.myInterval = 0;
    this.noWrapSlides = true;
    this.myInterval = false;
  }

  addSlide(): void {
    setTimeout( () => {
      const seed = Math.random().toString(36).slice(-6);
     let imageLinks = [
      "https://images.rosewoodhotels.com/is/image/rwhg/panoramic-ocean-view-suite-bedroom:TALL-LARGE-9-16",
       "https://imgmedia.lbb.in/media/2019/07/5d4158d33e1ba8795b284d5b_1564563667233.jpg",
       "https://i2.wp.com/yourkrabi.com/wp-content/uploads/2011/09/beyond-seaview.jpg?fit=1080%2C720&ssl=1",
       "https://images.rosewoodhotels.com/is/image/rwhg/seascape-ocean-view-twin-room:WIDE-LARGE-16-9",
    ]
    this.index ++
if(this.index = 3){
  this.index = 0
}
      this.slides.push({
        image: imageLinks[this.index]
      });
    }, 500);
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }


  ngOnInit(): void {
    this.getHotelList();
    this.getHotelName();
    this.getCityList();
  }

  getHotelList(){
    this.apiService.getHotels().subscribe(response => {
      console.log('list of hotels ' + JSON.stringify(response));
      this.hotelDetails = response
      
      }, (err) => {
     
      });
  }
  
  getHotelName(){
    this.apiService.getHotelInfo().subscribe(response =>{
      console.log('hotel info  ' + JSON.stringify(response));
      this.hotelInfo = response;
      this.mapInfoandDetails()
    })
  }

  mapInfoandDetails(city?,rooms?){

    this.hotelDetails.forEach((element,index) => {
      if(element.city == "Goa"){
        let hotelRate;
        let ratings;
        if(element.hotelname == this.hotelInfo[index].hotelname){
          hotelRate = this.hotelInfo[index].singleroomprice;
          ratings = this.hotelInfo[index].hotelrating;
        }
        let data = {
          "hotelname": element.hotelname,
          "hoteladdressl1": element.hoteladdressl1,
          "hoteladdressl2": element.hoteladdressl2,
          "city": element.city,
          "state": element.state,
          "pincode": element.pincode,
          "hotelrate":hotelRate,
          "ratings":ratings
        }
        this.mergedInfo.push(data) 
      }
      console.log("merged json " + JSON.stringify( this.mergedInfo));
      
    });
  }

  getCityList(){
    this.apiService.getCityList().subscribe(response => {
      this.cityList = response;
      console.log("city list " + JSON.stringify(this.cityList));
      this.data = this.cityList
      }, (err) => {
     
      });
  }
  keyword = 'cityname';
  // data = [
  //    {
  //      id: 1,
  //      name: 'Usa'
  //    },
  //    {
  //      id: 2,
  //      name: 'England'
  //    }
  // ];


  selectEvent(item) {
    console.log('on city change ' + JSON.stringify(item) );
    
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }

  viewDetails(){
    this.router.navigateByUrl('customer/hotelDetails')
  }
}
