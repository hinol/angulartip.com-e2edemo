import {Injectable} from '@angular/core';
import {ColorOptionEnum} from '../forms/color.form';
import {Car} from '../classes/car.interface';

@Injectable()
export class ChangeColorService {


    constructor() {

    }

    changeColor(cars: Car[], from: ColorOptionEnum, to: ColorOptionEnum): Car[] {
        return cars
            .map(car => {
                if (car.color === from) {
                    car.color = to;
                }
                return car;
            });

    }


}
