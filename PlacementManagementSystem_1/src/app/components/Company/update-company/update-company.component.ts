import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/page/model/company';
import { CompanyService } from 'src/app/page/service/company.service';
import { ManagerService } from 'src/app/page/service/manager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css'],
  preserveWhitespaces:true
})
export class UpdateCompanyComponent implements OnInit {

   cid:number;
   company:Company;
   updateCompanyForm:FormGroup;

  constructor(private _activatedRout:ActivatedRoute,
              private _companyService:CompanyService,
              private _formBulider:FormBuilder,
              private _route:Router) 
  { 
          this.updateCompanyForm=_formBulider.group(
            {
              companyId:[0],
              companyName:['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(10)])],
              companyDescription:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(15)])],
              companyEmail:['',Validators.compose([Validators.required,Validators.email])],
              companyAddress:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(15)])]
               }
          );

  }

  ngOnInit(): void 
  {
     this.cid= this._activatedRout.snapshot.params['companyId'];

     this._companyService.getCompanyById(this.cid).subscribe(responce=>
      {
           this.company=responce;
           console.log(responce);
           this.updateCompanyForm=this._formBulider.group(
            {
              companyId:[responce.companyId],
              companyName:[responce.companyName,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(10)])],
              companyDescription:[responce.companyDescription,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(15)])],
              companyEmail:[responce.companyEmail,Validators.compose([Validators.required,Validators.email])],
              companyAddress:[responce.companyAddress,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])]
              
              
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
  updateCompany()
  {
    //console.log(this.updateStudentForm.valid);
    
    if(this.updateCompanyForm.valid)
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
          this._companyService.updateCompanyById(this.cid,this.updateCompanyForm.value).subscribe((responce:any)=>
            {
              Swal.fire('Your record is Updated!', '', 'success');
              console.log(responce);
              //alert("hello");
              this._route.navigate(['admin-dashboard/company-list']);
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
