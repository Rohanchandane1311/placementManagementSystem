import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  sid:number;
  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {


    this.sid= this._activatedRoute.snapshot.params['studentId'];
    sessionStorage.setItem('sid',this.sid.toString());
    // alert(this._activatedRoute.snapshot.params['studentId']);
  }

}
