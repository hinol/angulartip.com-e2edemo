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


    constructor(private fetchCarService: FetchCarService,
                private changeColorService: ChangeColorService) {

    }


    calculate(requirements: { color: ColorOptionEnum, type: TypeOptionEnum }): number {
        return this.possibilityCars()
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
        return this.changeColorService(this.possibilityCars(), ColorOptionEnum.RED, ColorOptionEnum.PINK)
    }

    possibilityCars(): Car[] {
        return [
            {color: ColorOptionEnum.RED, type: TypeOptionEnum.PICKUP},
            {color: ColorOptionEnum.RED, type: TypeOptionEnum.TRUCK}
        ];
    }


    fetchAllCars(color: ColorOptionEnum): Observable<number> {
        return this.fetchCarService.getCars()
            .map(data => data.filter(_color => _color === color))
            .map(data => data.length);
    }


}
