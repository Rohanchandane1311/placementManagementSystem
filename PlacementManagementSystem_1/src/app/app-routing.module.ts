import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './components/Student/add-students/add-students.component';
import { AdminAuthenticationGuard } from './components/admin-authentication.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UpdateStudentsComponent } from './components/Student/update-students/update-students.component';
import { UserAuthenticationGuard } from './components/user-authentication.guard';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ViewStudentsComponent } from './components/Student/view-students/view-students.component';
import { AddManagersComponent } from './components/Manager/add-managers/add-managers.component';
import { ViewManagersComponent } from './components/Manager/view-managers/view-managers.component';
import { UpdateManagersComponent } from './components/Manager/update-managers/update-managers.component';
import { ViewCompanysComponent } from './components/Company/view-companys/view-companys.component';
import { AddCompanysComponent } from './components/Company/add-companys/add-companys.component';
import { UpdateCompanyComponent } from './components/Company/update-company/update-company.component';
import { AddJobsComponent } from './components/Job/add-jobs/add-jobs.component';
import { UpdateJobComponent } from './components/Job/update-job/update-job.component';
import { ViewJobsComponent } from './components/Job/view-jobs/view-jobs.component';
import { StudentprofileComponent } from './components/studentprofile/studentprofile.component';
import { StudentregisterComponent } from './components/studentregister/studentregister.component';

const routes: Routes = [
  {path:'',component:AdminLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
 
  {path:'user-dashboard/:studentId',component:UserDashboardComponent,canActivate:[UserAuthenticationGuard],
      children:[
         
        
        {path:'studentprofile',component:StudentprofileComponent},
        {path:'job-list',component:ViewJobsComponent},
      
      ]
   },
  {path:'admin-dashboard',component:AdminDashboardComponent,canActivate:[AdminAuthenticationGuard],
      children:[
        
          {path:'studentregister',component:StudentregisterComponent},
          {path:'student-list',component:ViewStudentsComponent},
          {path:'add-student',component:AddStudentsComponent},
          {path:'update-student/:studentId',component:UpdateStudentsComponent},
          {path:'manager-list',component:ViewManagersComponent},
          {path:'add-manager',component:AddManagersComponent},
          {path:'update-manager/:managerId',component:UpdateManagersComponent},
          {path:'company-list',component:ViewCompanysComponent},
          {path:'add-company',component:AddCompanysComponent},
          {path:'update-company/:companyId',component:UpdateCompanyComponent},
          {path:'job-list',component:ViewJobsComponent},
          {path:'add-job',component:AddJobsComponent},
          {path:'update-job/:jobId',component:UpdateJobComponent},
        
      ]
   },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
