import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { HomeComponent } from "./home.component";
import { PageNotFoundComponent } from "./page-not-found.component";

const routes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'departments', component: DepartmentListComponent},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'departments/:id', component: DepartmentDetailComponent},
    {path: '**', component: PageNotFoundComponent}
  ]

  @NgModule({
      imports: [
          RouterModule.forRoot(routes)
      ],
      exports: [
        RouterModule
      ]
  })

export class AppRoutingModule{}
export const routingComponents = [HomeComponent, PageNotFoundComponent, DepartmentListComponent, EmployeeListComponent, DepartmentDetailComponent]