import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/page/service/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrls: ['./studentregister.component.css'],
  preserveWhitespaces:true
})
export class StudentregisterComponent implements OnInit {

  studentReg:FormGroup;

  constructor(private _studentService:StudentService,
              private _formBulider:FormBuilder,
              private _router:Router)
  { 
       this.studentReg= this._formBulider.group(
        {
            studentId:[0],
            studentName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
            studentEmail:['',Validators.compose([Validators.required,Validators.email])],
            studentAge:['',Validators.compose([Validators.required,Validators.min(10),Validators.max(30)])],
            studentPassword:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
            studentClass:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])],
            studentCGPA:['',Validators.compose([Validators.required,Validators.minLength(0.0),Validators.maxLength(9.09)])]
            
        });

        
  }

  ngOnInit(): void
   {
   }
   register()
   {
      if(this.studentReg.valid)
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
            this._studentService.addStudent(this.studentReg.value).subscribe(responce=>
              {

                Swal.fire({
                  title: 'Register Successfully...!',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })
                // Swal.fire('Your record is Saved!', '', 'success')
                // this._router.navigate(['admin-dashboard/student-list']);

  
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
      console.log(this.studentReg.value);

           

      }
      console.log(this.studentReg.valid);
      
   }




}
