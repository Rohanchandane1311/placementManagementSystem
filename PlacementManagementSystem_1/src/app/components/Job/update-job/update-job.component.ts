import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/page/model/job';
import { Manager } from 'src/app/page/model/manager';
import { JobService } from 'src/app/page/service/job.service';
import { ManagerService } from 'src/app/page/service/manager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css'],
  preserveWhitespaces:true
})
export class UpdateJobComponent implements OnInit {

  jid:number;
   job:Job;
   updateJobForm:FormGroup;

  constructor(private _activatedRout:ActivatedRoute,
              private _jobService:JobService,
              private _formBulider:FormBuilder,
              private _route:Router) 
  { 
          this.updateJobForm=_formBulider.group(
            {
              jobId:[0],
            jobName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
            jobDescription:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
            jobSalary:['',Validators.compose([Validators.required,Validators.minLength(5000),Validators.maxLength(500000)])]
            }
          );

  }

  ngOnInit(): void 
  {
     this.jid= this._activatedRout.snapshot.params['jobId'];

     this._jobService.getJobById(this.jid).subscribe(responce=>
      {
           this.job=responce;
           console.log(responce);
           this.updateJobForm=this._formBulider.group(
            {
              jobId:[responce.jobId],
              jobName:[responce.jobName,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
              jobDejobDescription:[responce.jobDescription,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
              jobSalary:[responce.jobSalary,Validators.compose([Validators.required,Validators.minLength(5000),Validators.maxLength(500000)])]
              
            }
          );

      },
      (error=>
        {
          console.log(error);
        })
      )
     //alert(this.sid);
  }
  updateJob()
  {
    //console.log(this.updateStudentForm.valid);
    
    if(this.updateJobForm.valid)
    {
      //alert("update");
      Swal.fire({
        title: 'Do you want to update this record?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Update',
        denyButtonText: `Don't update`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) 
        {
          this._jobService.updateJobById(this.jid,this.updateJobForm.value).subscribe((responce:any)=>
            {
              Swal.fire('Your record is Updated!', '', 'success');
              console.log(responce);
              //alert("hello");
              this._route.navigate(['admin-dashboard/job-list']);
            },
             (error)=>
             {
              console.log(error);

             }
          );
          
        } 
        else if (result.isDenied) 
        {
          Swal.fire('Changes are not updated', '', 'info');
        }
      })
    
    }
  }



}
