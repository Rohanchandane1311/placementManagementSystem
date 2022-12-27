import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../model/job';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private baseUrl="http://localhost:8081/";

  constructor(private _http:HttpClient) { }

  public getAllJobs():Observable<Job[]>
  {
     return this._http.get<Job[]>(`${this.baseUrl}job/`);
  }
  public deleteJob(jobId:number)
  {
     return this._http.delete(`${this.baseUrl}job/${jobId}`);
  }
  public addJob(jobRecord:Job):Observable<Job>
  {
      return this._http.post<Job>(`${this.baseUrl}job/`,jobRecord);
  }
  public getJobById(jobId:number):Observable<Job>
  {
      return this._http.get<Job>(`${this.baseUrl}job/${jobId}`);
  }
  public updateJobById(jobId:number,job:Job)
  {
         return this._http.put<Job>(`${this.baseUrl}job/${jobId}`,job);
  }

}
