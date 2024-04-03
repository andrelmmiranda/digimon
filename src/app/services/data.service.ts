import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Digimon } from "../interfaces/Digimon";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) { }
    
    data?: Digimon[];

    getData(url: string): Observable<any> {
        return this.http.get(url);
    }
}