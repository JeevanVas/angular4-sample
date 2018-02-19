import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService{
    private _url: string =  "assets/apidata/employeedata.json";
    constructor(private _http:Http){ }
    getEmployees(){
        /*return [
            {"id":1,"name":'Jeev',"gender":'Male'},
            {"id":2,"name":'Jeeth',"gender":'Male'},
            {"id":3,"name":'Jita',"gender":'Female'},
            {"id":4,"name":'Jeena',"gender":'Female'}
          ] */
          return this._http.get(this._url)
          .map((response:Response) => response.json());
    }
}