import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplyJob } from '../model/apply-job';

@Injectable({
  providedIn: 'root'
})
export class ApplyjobService {

  private baseUrl="http://localhost:8081/";
  constructor(private _http:HttpClient) { }

  public applyjob(applyJob:ApplyJob):Observable<ApplyJob>
  {
      return this._http.post<ApplyJob>(`${this.baseUrl}applyJob/addJob`,applyJob);
  }
  
}
