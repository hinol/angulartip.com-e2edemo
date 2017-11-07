import {inject, TestBed} from '@angular/core/testing';
import {CarService} from './car.service';
import {ColorOptionEnum, TypeOptionEnum} from '../forms/color.form';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {FetchCarService} from './fetch-car.service';
import {ChangeColorService} from './change-color.service';

describe('Cat Service  test', () => {

    class FetchCarServiceMock {
        getCars() {

        }
    }

    class ChangeColorServiceMock {

    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CarService,
                {provide: FetchCarService, useClass: FetchCarServiceMock},
                {provide: ChangeColorService, useClass: ChangeColorServiceMock},

            ]
        });
    });

    let carService: CarService;
    it('should be created', inject([CarService], (service: CarService) => {
        carService = service;
        expect(service).toBeTruthy();
    }));

    it('some dummy test', () => {
        const posibilityCars = carService.calculate({color: ColorOptionEnum.BLUE, type: TypeOptionEnum.PICKUP});
        expect(posibilityCars).toEqual(0);
    });

    it('test', done => {
        spyOn(FetchCarServiceMock.prototype, 'getCars')
            .and.callFake(() => Observable.of([ColorOptionEnum.PINK, ColorOptionEnum.PINK]));
        carService.fetchAllCars(ColorOptionEnum.PINK).subscribe(cnt => {
            expect(cnt).toEqual(2);
            done();
        });
    });

});