import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company';
import { Manager } from '../model/manager';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl="http://localhost:8081/";

  constructor(private _http:HttpClient) { }

  public getAllCompanys():Observable<Company[]>
  {
     return this._http.get<Company[]>(`${this.baseUrl}company/`);
  }
  public deleteCompany(companyId:number)
  {
     return this._http.delete(`${this.baseUrl}company/${companyId}`);
  }
  public addCompany(companyRecord:Company):Observable<Company>
  {
      return this._http.post<Company>(`${this.baseUrl}company/`,companyRecord);
  }
  public getCompanyById(companyId:number):Observable<Company>
  {
      return this._http.get<Company>(`${this.baseUrl}company/${companyId}`);
  }
  public updateCompanyById(companyId:number,company:Company)
  {
         return this._http.put<Company>(`${this.baseUrl}company/${companyId}`,company);
  }

}
