import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';
import { Nationality } from '../utils/Nationality.enum';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    constructor(private http: HttpClient) { }

    url = 'https://randomuser.me/api/';

    fetch(
        gender: 'male' | 'female' | 'both' = 'both',
        nat: Nationality = Nationality.ALL,
    ): Observable<RandomUserResponseType> {
        let queryParams = new HttpParams();
        // seed for generating the same user set every time
        queryParams = queryParams.append('seed', 'jumia');
        // arbitrary sample size value of 500
        queryParams = queryParams.append('results', '500');
        queryParams = queryParams.append('gender', gender);
        queryParams = queryParams.append('nat', nat);

        return this.http.get<RandomUserResponseType>(this.url, { params: queryParams });

    }

    getXMLURL(): string {
        return 'https://randomUser.me/api/?seed=jumia&results=500&format=xml';
    }
    getCSVURL(): string {
        return 'https://randomUser.me/api/?seed=jumia&results=500&format=csv';
    }

}

export type RandomUserResponseType = {
    info: {
        page: number,
        results: number,
        seed: string,
        version: string,
    },
    results: User[];
};
