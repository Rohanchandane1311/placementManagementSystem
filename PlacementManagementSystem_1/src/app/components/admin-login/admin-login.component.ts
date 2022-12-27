import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/page/service/student.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  preserveWhitespaces:true
})
export class AdminLoginComponent implements OnInit {

  adminloginForm:FormGroup;
  sid:number;
   constructor(private _formBulider:FormBuilder,
               private _studentService:StudentService,
               private _router:Router) {} 

    ngOnInit(): void 
    {
      sessionStorage.removeItem("student");
      this.adminloginForm= this._formBulider.group(
        {

            studentEmail:['',Validators.compose([Validators.required,Validators.email])],
            studentPassword:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
        }
      );
    }
    loginCheck()
    {
      if(this.adminloginForm.valid)
      {
        var email= this.adminloginForm.get('studentEmail')?.value;
        var password= this.adminloginForm.get('studentPassword')?.value;

          if(email=='admin@gmail.com' && (password='admin'))
          {
             //alert("admin");
             sessionStorage.setItem("email",email);
            this._router.navigate(['admin-dashboard']);
          }
          else
          {
            this._studentService.checkLogin(email,password).subscribe(response=>
              {
                if(response!=null)
                {
                  sessionStorage.setItem("student","student");
                  sessionStorage.setItem("email",email);
                  this.sid= response.studentId;
                     //alert("hello"+this.sid);
                     this._router.navigate(['user-dashboard/'+this.sid]);
                }
                else
                { 
                    alert("login failed");
                }
    
              },
              (error=>
                {
                    console.log(error);
                })
              );
         
          }



         }
      console.log(this.adminloginForm.value);
    }

}
