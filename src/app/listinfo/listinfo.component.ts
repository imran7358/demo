import { Component, OnInit } from '@angular/core';
import{IEmployee} from '../employee';
import{EmployeedataService} from '../employeedata.service'

@Component({
  selector: 'app-listinfo',
  templateUrl: './listinfo.component.html',
  styleUrls: ['./listinfo.component.scss'],
  providers:[EmployeedataService]
})
export class ListinfoComponent implements OnInit {
employee:IEmployee[];
  constructor(private _employeeService: EmployeedataService) { }

  ngOnInit() {

    this.employee = this._employeeService.getEmployee();
    console.log(this.employee)
  }

}
