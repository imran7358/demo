import { Component, OnInit } from '@angular/core';
import{CountryserviceService} from '../countryservice.service';
import{ICountry} from '../country'


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers:[CountryserviceService]
})
export class CountryComponent implements OnInit {
  countryinfo:ICountry[];

  constructor(private countryService: CountryserviceService) { }

  ngOnInit() {
    this.getcountryinfo();
  
   
  }


  getcountryinfo() {

    this.countryService.getData().subscribe(data => {
      this.countryinfo = data;
      console.log(this.countryinfo)
    });
    
  }
}
