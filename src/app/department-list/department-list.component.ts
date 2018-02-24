import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "ReactJs"},
    {"id": 3, "name": "Dojo"},
    {"id": 4, "name": "Javascript"},
    {"id": 5, "name": "Bootstrap"},
  ];

  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }

}
