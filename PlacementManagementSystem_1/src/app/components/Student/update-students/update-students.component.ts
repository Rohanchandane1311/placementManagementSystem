import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/page/model/student';
import { StudentService } from 'src/app/page/service/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-students',
  templateUrl: './update-students.component.html',
  styleUrls: ['./update-students.component.css'],
  preserveWhitespaces:true
})
export class UpdateStudentsComponent implements OnInit {

  sid:number;
   student:Student;
   updateStudentForm:FormGroup;

  constructor(private _activatedRout:ActivatedRoute,
              private _studentService:StudentService,
              private _formBulider:FormBuilder,
              private _route:Router) 
  { 
          this.updateStudentForm=_formBulider.group(
            {
              studentId:[0],
              studentName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
              studentEmail:['',Validators.compose([Validators.required,Validators.email])],
              studentAge:['',Validators.compose([Validators.required,Validators.min(10),Validators.max(30)])],
              studentPassword:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
              studentClass:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
              studentCGPA:['',Validators.compose([Validators.required,Validators.minLength(0.0),Validators.maxLength(9.09)])]
              
            }
          );

  }

  ngOnInit(): void 
  {
     this.sid= this._activatedRout.snapshot.params['studentId'];

     this._studentService.getStudentById(this.sid).subscribe(responce=>
      {
           this.student=responce;
           console.log(responce);
           this.updateStudentForm=this._formBulider.group(
            {
              studentId:[responce.studentId],
              studentName:[responce.studentName,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
              studentEmail:[responce.studentEmail,Validators.compose([Validators.required,Validators.email])],
              studentAge:[responce.studentAge,Validators.compose([Validators.required,Validators.min(10),Validators.max(30)])],
              studentPassword:[responce.studentPassword,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
              studentClass:[responce.studentClass,Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])],
              studentCGPA:[responce.studentCGPA,Validators.compose([Validators.required,Validators.minLength(0.0),Validators.maxLength(9.09)])]
              
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
  updateStudent()
  {
    //console.log(this.updateStudentForm.valid);
    
    if(this.updateStudentForm.valid)
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
          this._studentService.updateStudentById(this.sid,this.updateStudentForm.value).subscribe(responce=>
            {
              Swal.fire('Your record is Updated!', '', 'success');
              console.log(responce);
              //alert("hello");
              this._route.navigate(['admin-dashboard/student-list']);
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
