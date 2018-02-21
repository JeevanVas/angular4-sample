import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { UserDataTdfComponent } from './user-data-tdf/user-data-tdf.component';
import { UserDataMdfComponent } from './user-data-mdf/user-data-mdf.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    UserDataTdfComponent,
    UserDataMdfComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    DepartmentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'departments', component:DepartmentListComponent},
      {path:'employees', component:EmployeeListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
