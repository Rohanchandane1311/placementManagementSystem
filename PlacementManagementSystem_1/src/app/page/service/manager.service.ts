import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../model/manager';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private baseUrl="http://localhost:8081/";

  constructor(private _http:HttpClient) { }

  public getAllManagers():Observable<Manager[]>
  {
     return this._http.get<Manager[]>(`${this.baseUrl}placementmanager/`);
  }
  public deleteManager(managerId:number)
  {
     return this._http.delete(`${this.baseUrl}placementmanager/${managerId}`);
  }
  public addManager(managerRecord:Manager):Observable<Manager>
  {
      return this._http.post<Manager>(`${this.baseUrl}placementmanager/`,managerRecord);
  }
  public getManagerById(managerId:number):Observable<Manager>
  {
      return this._http.get<Manager>(`${this.baseUrl}placementmanager/${managerId}`);
  }
  public updateManagerById(managerId:number,manager:Manager)
  {
         return this._http.put<Manager>(`${this.baseUrl}placementmanager/${managerId}`,manager);
  }

}
