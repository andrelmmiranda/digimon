import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'https://digimon-api.vercel.app/api/digimon'

  constructor(private http: HttpClient) { }

  read(): Observable<any>{
    return this.http.get<any>(this.url)
  }
}
