import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.scss']
})
export class DailogComponent implements OnInit {
  dailogText: any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dailogText = this.dataService.dailogText;
  }

}
