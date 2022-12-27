import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/page/service/student.service';
import Swal from 'sweetalert2';
import { Student } from '../../../page/model/student';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  studentList:Student[]=[];

  constructor(private _studentService:StudentService) { }

  ngOnInit(): void 
  {
      this.getAllStudentDetails();
  }
  getAllStudentDetails()
  {
    this._studentService.getAllStudents().subscribe(
      (responce:any)=>
      {
            this.studentList=responce;
      },
      (error=>
        {
            console.log(error);
        })
      );
    
  }
  deleteStudent(id:number)
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
        this._studentService.deleteStudent(id).subscribe(
          
           (responce:any)=>
          {
              this.getAllStudentDetails();
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
