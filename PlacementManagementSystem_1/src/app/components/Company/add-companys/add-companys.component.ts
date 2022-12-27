import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/page/service/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-companys',
  templateUrl: './add-companys.component.html',
  styleUrls: ['./add-companys.component.css'],
  preserveWhitespaces:true
})
export class AddCompanysComponent implements OnInit {

  companyReg:FormGroup;

  constructor(private _companyService:CompanyService,
              private _formBulider:FormBuilder,
              private _router:Router)
  { 
       this.companyReg= this._formBulider.group(
        {
            companyId:[0],
            companyName:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
            companyDescription:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(15)])],
            companyEmail:['',Validators.compose([Validators.required,Validators.email])],
            companyAddress:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(15)])]
            
           
            
        });

        
  }

  ngOnInit(): void
   {
   }
   register()
   {
      if(this.companyReg.valid)
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
            this._companyService.addCompany(this.companyReg.value).subscribe((responce:any)=>
              {
                Swal.fire('Your record is Saved!', '', 'success')
                this._router.navigate(['admin-dashboard/company-list']);
  
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
      console.log(this.companyReg.value);

           

      }
      console.log(this.companyReg.valid);
      
   }




}
