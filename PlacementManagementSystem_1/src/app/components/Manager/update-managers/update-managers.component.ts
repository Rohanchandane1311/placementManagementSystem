import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Manager } from 'src/app/page/model/manager';
import { ManagerService } from 'src/app/page/service/manager.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-managers',
  templateUrl: './update-managers.component.html',
  styleUrls: ['./update-managers.component.css'],
  preserveWhitespaces:true
})
export class UpdateManagersComponent implements OnInit {

   mid:number;
   manager:Manager;
   updateManagerForm:FormGroup;

  constructor(private _activatedRout:ActivatedRoute,
              private _managerService:ManagerService,
              private _formBulider:FormBuilder,
              private _route:Router) 
  { 
          this.updateManagerForm=_formBulider.group(
            {
              managerId:[0],
              managerName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
              placementManagerUserName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
              managerEmail:['',Validators.compose([Validators.required,Validators.email])],
              placementManagerPassword:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
              managerContactNumber:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])]
           
            }
          );

  }

  ngOnInit(): void 
  {
     this.mid= this._activatedRout.snapshot.params['managerId'];

     this._managerService.getManagerById(this.mid).subscribe(responce=>
      {
           this.manager=responce;
           console.log(responce);
           this.updateManagerForm=this._formBulider.group(
            {
              managerId:[responce.managerId],
              managerName:[responce.managerName,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
              placementManagerUserName:[responce.placementManagerUserName,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
              managerEmail:[responce.managerEmail,Validators.compose([Validators.required,Validators.email])],
              placementManagerPassword:[responce.placementManagerPassword,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
              managerContactNumber:[responce.managerContactNumber,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])]
              
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
  updateManager()
  {
    //console.log(this.updateStudentForm.valid);
    
    if(this.updateManagerForm.valid)
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
          this._managerService.updateManagerById(this.mid,this.updateManagerForm.value).subscribe((responce:any)=>
            {
              Swal.fire('Your record is Updated!', '', 'success');
              console.log(responce);
              //alert("hello");
              this._route.navigate(['admin-dashboard/manager-list']);
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
