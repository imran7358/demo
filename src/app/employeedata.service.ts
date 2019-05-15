import { Injectable } from '@angular/core';
import{IEmployee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {

  constructor() { }
  getEmployee(): IEmployee[]{
    return[
      {code:'001', name:'Mohammad Imran', gneder:'Male', annualSalary:1000, dateofbirth:'05/04/19'},
      {code:'001', name:'Mohammad Salman', gneder:'Male', annualSalary:1000, dateofbirth:'05/04/19'},
      {code:'001', name:'Mohd Khalid', gneder:'Male', annualSalary:1000, dateofbirth:'05/04/19'},
      {code:'001', name:'Atiqurrahman', gneder:'Male', annualSalary:1000, dateofbirth:'05/04/19'},
      {code:'001', name:'Thomas', gneder:'Male', annualSalary:1000, dateofbirth:'05/04/19'},
      {code:'001', name:'Mohammad Kashif', gneder:'Male', annualSalary:1000, dateofbirth:'05/04/19'},
      {code:'001', name:'Akhtar Husain', gneder:'Male', annualSalary:1000, dateofbirth:'05/04/19'}
    ]
  }
}
