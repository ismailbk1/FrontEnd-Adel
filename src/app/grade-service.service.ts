import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeServiceService {

  

  constructor(private httpClient:HttpClient){}
  api="http://localhost:8080/api"

  

  public createGrade(data:any):Observable<any>{
    return this.httpClient.post<any>(`${this.api}/addGrade`,data) ;
  }
 
  public deleteGrade(id:any):Observable<any>{
    return this.httpClient.delete<any>(`${this.api}/deleteGrade/${id}`) ;
  }
  public getGradeById(id :any):Observable<any>{
    return this.httpClient.get<any>(`${this.api}/getGradeById/${id}`) ;
  }

  public updateGrade(id :any,data:any):Observable<any>{
    return this.httpClient.put<any>(`${this.api}/updateGrade/${id}`,data) ;
  }

}
