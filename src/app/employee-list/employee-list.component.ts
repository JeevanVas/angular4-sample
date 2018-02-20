import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any= [];
  errorMsg: string;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(resEmployeeData => this.employees = resEmployeeData,
               resEmployeeError => this.errorMsg = resEmployeeError);
    console.log(this._employeeService );
  }
}
