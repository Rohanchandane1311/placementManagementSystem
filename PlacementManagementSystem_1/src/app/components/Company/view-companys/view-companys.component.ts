import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/page/model/company';
import { Manager } from 'src/app/page/model/manager';
import { CompanyService } from 'src/app/page/service/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-companys',
  templateUrl: './view-companys.component.html',
  styleUrls: ['./view-companys.component.css']
})
export class ViewCompanysComponent implements OnInit {

  companyList:Company[];

  constructor(private _companyService:CompanyService) { }

  ngOnInit(): void 
  {
      this.getAllCompanyDetails();
  }
  getAllCompanyDetails()
  {
    this._companyService.getAllCompanys().subscribe(
      (responce:Company[])=>
      {
            this.companyList=responce;
      },
      (error=>
        {
            console.log(error);
        })
      );
    
  }
  deleteCompany(id:number)
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
        this._companyService.deleteCompany(id).subscribe(
          
           (responce:any)=>
          {
              this.getAllCompanyDetails();
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
