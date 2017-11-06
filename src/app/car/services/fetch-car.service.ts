import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ColorOptionEnum} from '../forms/color.form';

@Injectable()
export class FetchCarService {

    constructor(private http: HttpClient) {
    }


    getCars(): Observable<Array<ColorOptionEnum>> {
        return this.http
            .get('someurl');
    }


}
