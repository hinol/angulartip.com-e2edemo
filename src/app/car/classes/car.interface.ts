import {ColorOptionEnum, TypeOptionEnum} from '../forms/color.form';

export interface Car {
    color: ColorOptionEnum;
    type ?: TypeOptionEnum;
}