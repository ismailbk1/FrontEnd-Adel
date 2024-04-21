import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private httpClient:HttpClient){}
  api="http://localhost:8080/api"

  public getResidences():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.api}/getResidence`)
  }
}
