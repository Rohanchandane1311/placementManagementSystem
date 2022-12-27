import { Component, OnInit } from '@angular/core';
import { ApplyJob } from 'src/app/page/model/apply-job';
import { Job } from 'src/app/page/model/job';
import { Student } from 'src/app/page/model/student';
import { ApplyjobService } from 'src/app/page/service/applyjob.service';
import { JobService } from 'src/app/page/service/job.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {

  jobList:Job[];
  status:any;
  studentId:any;
  applyJob1:ApplyJob=new ApplyJob;
  studentObj:Student=new Student;
  jobObj:Job= new Job;

  constructor(private _jobService:JobService,
              private _applyjobService:ApplyjobService) { }

  ngOnInit(): void 
  {
    this.studentId= sessionStorage.getItem('sid');
    this.status=sessionStorage.getItem("student");
      this.getAllJobDetails();
  }
  getAllJobDetails()
  {
    this._jobService.getAllJobs().subscribe(
      (responce:Job[])=>
      {
            this.jobList=responce;
      },
      (error=>
        {
            console.log(error);
        })
      );
    
  }
applyJob(jobId:number)
{
    //  alert("hello");
      this.studentObj.studentId=this.studentId;
      this.jobObj.jobId=jobId;

 
      this.applyJob1.status="applied";
      this.applyJob1.student=this.studentObj;
      this.applyJob1.job=this.jobObj;

      console.log(this.applyJob1);
      this._applyjobService.applyjob(this.applyJob1).subscribe(response=>
        {
                //  alert('Applied Job');
                 Swal.fire({
                  title: 'Applied Job Successfully...!',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })
        },
        (error)=>
        {
             console.log(error);
        })

}

  deleteJob(id:any)
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure to delete this record?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) 
      {
        this._jobService.deleteJob(id).subscribe(
          
           (responce:any)=>
          {
              this.getAllJobDetails();
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your record has been deleted.',
                'success'
              )
            
          },
          ((error: any)=>
          {
            console.log(error);
          })
        );
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    });






         }


}
