import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/observable/throw';
import{ICountry} from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {
  constructor(private http:Http) {
   }
  getData(): Observable<ICountry[]> {
    return this.http.get('https://restcountries.eu/rest/v2/all')
    .map((res:Response) => <ICountry[]>res.json());
      
  }


  }


