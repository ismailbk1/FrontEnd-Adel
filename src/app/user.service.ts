import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient:HttpClient){}
  api="http://localhost:8080/api"
   
  public getUser():Observable<any>{
    return this.httpClient.get<any>(`${this.api}/getUser`);
  }
  public createUser(userData:any):Observable<any>{
    return this.httpClient.post(`${this.api}/postUser`,userData)
  }
  public findUserById(id:string):Observable<any>{
    return this.httpClient.get<any>(`${this.api}/findUserById/${id}`)
  }
  public deleteUser(id:string):Observable<any>{
    return this.httpClient.delete<any>(`${this.api}/deleteUser/${id}`)
  }
  public updateUser(userData:any,id:any):Observable<any>{
    return this.httpClient.put(`${this.api}/updateUser/${id}`,userData);
  }
}
