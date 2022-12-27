import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/page/service/manager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-managers',
  templateUrl: './add-managers.component.html',
  styleUrls: ['./add-managers.component.css'],
  preserveWhitespaces:true
})
export class AddManagersComponent implements OnInit {

  managerReg:FormGroup;

  constructor(private _managerService:ManagerService,
              private _formBulider:FormBuilder,
              private _router:Router)
  { 
       this.managerReg= this._formBulider.group(
        {
            managerId:[0],
            managerName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
            placementManagerUserName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(15)])],
            managerEmail:['',Validators.compose([Validators.required,Validators.email])],
            placementManagerPassword:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
            managerContactNumber:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])]
           
            
        });

        
  }

  ngOnInit(): void
   {
   }
   register()
   {
      if(this.managerReg.valid)
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
            this._managerService.addManager(this.managerReg.value).subscribe((responce:any)=>
              {
                Swal.fire('Your record is Saved!', '', 'success')
                this._router.navigate(['admin-dashboard/manager-list']);
  
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
      console.log(this.managerReg.value);

           

      }
      console.log(this.managerReg.valid);
      
   }



}
