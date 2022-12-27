import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl="http://localhost:8081/";

  constructor(private _http:HttpClient) { }

  public getAllStudents():Observable<Student[]>
  {
     return this._http.get<Student[]>(`${this.baseUrl}student/`);
  }
  public deleteStudent(studentId:number)
  {
     return this._http.delete(`${this.baseUrl}student/${studentId}`);
  }
  public addStudent(studentRecord:Student):Observable<Student>
  {
      return this._http.post<Student>(`${this.baseUrl}student/`,studentRecord);
  }
  public getStudentById(studentId:number):Observable<Student>
  {
      return this._http.get<Student>(`${this.baseUrl}student/${studentId}`);
  }
  public updateStudentById(studentId:number,student:Student)
  {
         return this._http.put<Student>(`${this.baseUrl}student/${studentId}`,student);
  }
  public checkLogin(email1:string,password1:string):Observable<Student>
  {
    let httpParams = new HttpParams();
    httpParams=httpParams.append('email',email1);
    httpParams=httpParams.append('password',password1);
    return this._http.get<Student>(`${this.baseUrl}student/check`,{params:httpParams});
  }

}
