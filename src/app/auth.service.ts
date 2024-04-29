import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private httpClient:HttpClient){}
api="http://localhost:8080/api"

public login(loginDto:any):Observable<any>{
  return this.httpClient.post<any>(`${this.api}/auth/login`,loginDto);
}
}
