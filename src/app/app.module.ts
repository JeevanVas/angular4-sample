import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { UserDataTdfComponent } from './user-data-tdf/user-data-tdf.component';
import { UserDataMdfComponent } from './user-data-mdf/user-data-mdf.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { routingComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    UserDataTdfComponent,
    UserDataMdfComponent,
    EmployeeDetailComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
