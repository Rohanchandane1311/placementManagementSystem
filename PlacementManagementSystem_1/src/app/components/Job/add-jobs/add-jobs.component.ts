import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/page/model/company';
import { Job } from 'src/app/page/model/job';
import { Manager } from 'src/app/page/model/manager';
import { CompanyService } from 'src/app/page/service/company.service';
import { JobService } from 'src/app/page/service/job.service';
import { ManagerService } from 'src/app/page/service/manager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css'],
  preserveWhitespaces:true
})
export class AddJobsComponent implements OnInit {

  jobReg:FormGroup;
  companyList:Company[];

  constructor(private _jobService:JobService,
              private _formBulider:FormBuilder,
              private _router:Router,
              private _companyService:CompanyService)
  { 
       this.jobReg= this._formBulider.group(
        {
            jobId:[0],
            jobName:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
            jobDescription:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
            jobSalary:['',Validators.compose([Validators.required,Validators.min(5000),Validators.max(500000)])],
            company:[''],
            
        });

        
  }

  ngOnInit(): void
{
this.getAllCompanies();
}

   getAllCompanies()
   {
     this._companyService.getAllCompanys().subscribe(response=>
      {
           this.companyList= response;
      },
      (error)=>
      {
           console.log(error);
      });
   }
   register()
   {
      if(this.jobReg.valid)
      {

        Swal.fire({
          title: 'Do you want to save this record?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) 
          {
            this._jobService.addJob(this.jobReg.value).subscribe((responce:Job)=>
              {
                Swal.fire('Your record is Saved!', '', 'success')
                this._router.navigate(['admin-dashboard/job-list']);
  
              },
              (error=>
                {
                  console.log(error);
                })
              );
  


          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      console.log(this.jobReg.value);

           

      }
      console.log(this.jobReg.valid);
      
   }



}
