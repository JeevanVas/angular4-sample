import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      let id = parseInt(params['id']);
      this.selectedId = id;
    })
  }

  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "ReactJs"},
    {"id": 3, "name": "Dojo"},
    {"id": 4, "name": "Javascript"},
    {"id": 5, "name": "Bootstrap"},
  ];

  onSelect(department){
    //this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
