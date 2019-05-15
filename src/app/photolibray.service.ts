import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import{IPhoto} from './photo-library';


@Injectable({
  providedIn: 'root'
})
export class PhotolibrayService {

  constructor(private http:Http) {

    console.log(this.getpics())

   }
  getpics(): Observable<IPhoto[]>{

    return this.http.get('https://picsum.photos/200/300')
    .map((res:Response)=> <IPhoto[]> res.json())

  }
}
