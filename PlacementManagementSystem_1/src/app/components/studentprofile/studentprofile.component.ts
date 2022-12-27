import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/page/model/student';
import { StudentService } from 'src/app/page/service/student.service';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {

  studentId:any;
  student:Student;
  constructor(private _studentService:StudentService)
  {

  }

  ngOnInit(): void 
  {
      this.studentId= sessionStorage.getItem('sid');
      this._studentService.getStudentById(this.studentId).subscribe(Response=>
        {
          this.student= Response;
        })
  }

}
