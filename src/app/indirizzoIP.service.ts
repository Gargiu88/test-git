import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class IndirizzoIP {
    constructor(public http: HttpClient){}

    loadIP(): Observable<any>{
        return this.http.get('https://api.ipify.org?format=json');

    }
}