import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewStudentsComponent } from './components/Student/view-students/view-students.component';
import { AddStudentsComponent } from './components/Student/add-students/add-students.component';
import { UpdateStudentsComponent} from './components/Student/update-students/update-students.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AddManagersComponent } from './components/Manager/add-managers/add-managers.component';
import { ViewManagersComponent } from './components/Manager/view-managers/view-managers.component';
import { UpdateManagersComponent } from './components/Manager/update-managers/update-managers.component';
import { Admin1NavbarComponent } from './admin1-navbar/admin1-navbar.component';
import { AddCompanysComponent } from './components/Company/add-companys/add-companys.component';
import { UpdateCompanyComponent } from './components/Company/update-company/update-company.component';
import { ViewCompanysComponent } from './components/Company/view-companys/view-companys.component';
import { AddJobsComponent } from './components/Job/add-jobs/add-jobs.component';
import { ViewJobsComponent } from './components/Job/view-jobs/view-jobs.component';
import { UpdateJobComponent } from './components/Job/update-job/update-job.component';
import { StudentprofileComponent } from './components/studentprofile/studentprofile.component';
import { StudentregisterComponent } from './components/studentregister/studentregister.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewStudentsComponent,
    UpdateStudentsComponent,
    AddStudentsComponent,
    AdminNavbarComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserNavbarComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ViewManagersComponent,
    UpdateManagersComponent,
    AddManagersComponent,
    Admin1NavbarComponent,
    AddCompanysComponent,
    UpdateCompanyComponent,
    ViewCompanysComponent,
    AddJobsComponent,
    ViewJobsComponent,
    UpdateJobComponent,
    StudentprofileComponent,
    StudentregisterComponent,
    


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
