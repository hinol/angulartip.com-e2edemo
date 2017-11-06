import {Injectable} from '@angular/core';
import {ColorOptionEnum, TypeOptionEnum} from '../forms/color.form';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/count';
import {FetchCarService} from './fetch-car.service';
import 'rxjs/add/operator/do';

@Injectable()
export class CarService {


    constructor(private fetchCarService: FetchCarService) {

    }


    calculate(requirements: { color: ColorOptionEnum, type: TypeOptionEnum }): number {
        return this.possibilityCars()
            .filter(car => {
                if (requirements.color && car[0] !== requirements.color) {
                    return false;
                }
                if (requirements.type && car[1] !== requirements.type) {
                    return false;
                }
                return true;
            })
            .length;
    }


    possibilityCars(): [ColorOptionEnum, TypeOptionEnum][] {
        return [
            [ColorOptionEnum.RED, TypeOptionEnum.PICKUP],
            [ColorOptionEnum.RED, TypeOptionEnum.TRUCK]
        ];
    }


    fetchAllCars(color: ColorOptionEnum): Observable<number> {
        return this.fetchCarService.getCars()
            .map(data =>  data.filter(_color => _color === color))
            .map(data => data.length);
    }


}
