import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService{
    getEmployees(){
        return [
            {"id":1,"name":'Jeev',"gender":'Male'},
            {"id":2,"name":'Jeeth',"gender":'Male'},
            {"id":3,"name":'Jita',"gender":'Female'},
            {"id":4,"name":'Jeena',"gender":'Female'}
          ]
    }
}