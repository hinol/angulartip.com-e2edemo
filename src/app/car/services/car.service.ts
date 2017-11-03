import {Injectable} from '@angular/core';
import {ColorOptionEnum, TypeOptionEnum} from '../forms/color.form';

@Injectable()
export class CarService {


    constructor() {

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


}
