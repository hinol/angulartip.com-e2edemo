import {inject, TestBed} from '@angular/core/testing';
import {CarService} from './car.service';
import {ColorOptionEnum, TypeOptionEnum} from '../forms/color.form';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {FetchCarService} from './fetch-car.service';
import {ChangeColorService} from './change-color.service';
import {Car} from '../classes/car.interface';

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
    let cars: Car[];

    beforeEach(inject([CarService], (service: CarService) => {
        carService = service;
        cars = (<any>carService).cars;
        expect(service).toBeTruthy();
    }));
    it('set cars', () => {
        carService.setCars([{color: ColorOptionEnum.BLUE, type: TypeOptionEnum.PICKUP}]);
        expect(carService['cars'].length).toEqual(1);
    });
    it('some dummy testaa', () => {
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