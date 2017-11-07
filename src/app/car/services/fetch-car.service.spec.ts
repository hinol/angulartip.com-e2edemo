import {TestBed, inject} from '@angular/core/testing';

import {FetchCarService} from './fetch-car.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('FetchCarService', () => {
    class HttpClientMock {
        get(){

        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                FetchCarService,
                {provide: HttpClient, useClass: HttpClientMock}
            ]
        });
    });
    let service :FetchCarService ;
    beforeEach(inject([FetchCarService], (_service: FetchCarService) => {
        service = _service;
        expect(service).toBeTruthy();
    }));

    it('aaaa', done => {

        spyOn(HttpClientMock.prototype, 'get').and.callFake(() => Observable.of(true));

        service.getCars().subscribe(v => {
            expect(v.length).toEqual(1);
            done();
        })


    })


});
