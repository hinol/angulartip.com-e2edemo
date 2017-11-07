import {Injectable} from '@angular/core';
import {ColorOptionEnum, TypeOptionEnum} from '../forms/color.form';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/count';
import {FetchCarService} from './fetch-car.service';
import 'rxjs/add/operator/do';
import {Car} from '../classes/car.interface';
import {ChangeColorService} from './change-color.service';

@Injectable()
export class CarService {

    private cars: Car[];

    constructor(private fetchCarService: FetchCarService,
                private changeColorService: ChangeColorService) {
            this.init();
    }

    calculate(requirements: { color: ColorOptionEnum, type: TypeOptionEnum }): number {
        return this.cars
            .filter(car => {
                if (requirements.color && car.color !== requirements.color) {
                    return false;
                }
                if (requirements.type && car.type !== requirements.type) {
                    return false;
                }
                return true;
            })
            .length;
    }

    makeRainbow(from: ColorOptionEnum, to: ColorOptionEnum): Car[] {
        return this.changeColorService.changeColor(this.cars, from, to);
    }

    init(): void {
        this.cars = [
            {color: ColorOptionEnum.RED, type: TypeOptionEnum.PICKUP},
            {color: ColorOptionEnum.RED, type: TypeOptionEnum.TRUCK}
        ];
    }

    setCars(cars: Car[]): void {
        this.cars = cars;
    }

    fetchAllCars(color: ColorOptionEnum): Observable<number> {
        return this.fetchCarService.getCars()
            .map(data => data.filter(_color => _color === color))
            .map(data => data.length);
    }

}
