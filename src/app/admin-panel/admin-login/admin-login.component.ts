import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DailogComponent } from '../../dailog/dailog.component';
import { ApiService } from '../../Service/api.service';
import { DataService } from '../../Service/data.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  username: string;
  password: string;
  loginResponse: any;
  constructor(private fb : FormBuilder, private apiService:ApiService, private dailog :MatDialog, private router : Router,private dataService:DataService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',[Validators.required,Validators.maxLength(10)]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    })
  }
  addLogin(data){
    console.log(data);
    
    this.apiService.login(data).subscribe(response =>{
      console.log('login call response ' + JSON.stringify(response));
      this.loginResponse = response;
      if(this.loginResponse.statusCode == "100"){
        this.router.navigateByUrl('/Admin/hotelListing')
      } else {
        this.dataService.dailogText = this.loginResponse.description;
        this.dailog.open(DailogComponent);
        setTimeout(() => {
          this.dailog.closeAll()
        }, 1000);
      }
      
    })



    //   this.router.navigateByUrl('/Admin/hotelListing')
    // }
    // else{
    //   this.router.navigate(['/newScreen/admin-login']);
    // }
  }
 
  forgotPassword(){
    
  }
}
