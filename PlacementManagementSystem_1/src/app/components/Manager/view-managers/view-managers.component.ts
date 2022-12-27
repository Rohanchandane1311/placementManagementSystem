import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/page/model/manager';
import { ManagerService } from 'src/app/page/service/manager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-managers',
  templateUrl: './view-managers.component.html',
  styleUrls: ['./view-managers.component.css']
})
export class ViewManagersComponent implements OnInit {

  managerList:Manager[];

  constructor(private _managerService:ManagerService) { }

  ngOnInit(): void 
  {
      this.getAllManagerDetails();
  }
  getAllManagerDetails()
  {
    this._managerService.getAllManagers().subscribe(
      (responce:Manager[])=>
      {
            this.managerList=responce;
      },
      (error=>
        {
            console.log(error);
        })
      );
    
  }
  deleteManager(id:number)
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
        this._managerService.deleteManager(id).subscribe(
          
           (responce:any)=>
          {
              this.getAllManagerDetails();
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
