import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{ListinfoComponent} from './listinfo/listinfo.component';
import {CountryComponent} from './country/country.component';
import{PicslibararyComponent} from './picslibarary/picslibarary.component'
const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'listinfo', component:ListinfoComponent},
  {path:'countryinfo', component:CountryComponent},
  {path:'photo', component:PicslibararyComponent}
];
@NgModule({
  exports: [ RouterModule ],
  declarations: [],
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ],

  ]
})
export class AppRoutingModule { }
