import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    private __url = 'https://jsonplaceholder.typicode.com/users';


    constructor(private __http: HttpClient) {
    }


    get(): Observable<any> {
        return this.__http.get(this.__url);
    }
}
