import { Component, OnInit } from '@angular/core';
import {PhotolibrayService} from '../photolibray.service';
import {IPhoto} from '../photo-library'

@Component({
  selector: 'app-picslibarary',
  templateUrl: './picslibarary.component.html',
  styleUrls: ['./picslibarary.component.scss'],
  providers:[PhotolibrayService]
})
export class PicslibararyComponent implements OnInit {
  getallpic:IPhoto[];
  constructor(private photoservice:PhotolibrayService) { }

  ngOnInit() {
    this.getpicsdata();
   
    
  }

  getpicsdata(){
    this.photoservice.getpics().subscribe(data=>{
      this.getallpic=data;
console.log(this.getallpic)
    })
  }



}
