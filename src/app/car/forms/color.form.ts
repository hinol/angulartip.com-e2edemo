import {FormBuilder, FormGroup, Validators} from '@angular/forms';



export enum TypeOptionEnum{
    TRUCK,
    PICKUP,
    CABRIOLET
}

export const TypeOption = [
    {value: TypeOptionEnum.TRUCK, label: 'truck'},
    {value: TypeOptionEnum.PICKUP, label: 'pickup'},
    {value: TypeOptionEnum.CABRIOLET, label: 'cabriolet'},
];

export enum ColorOptionEnum{
    RED,
    BLUE,
    PINK
}

export const ColorOption = [
    {value: ColorOptionEnum.RED, label: 'red'},
    {value: ColorOptionEnum.BLUE, label: 'blue'},
    {value: ColorOptionEnum.PINK, label: 'pink'},
];


export class ColorForm{
    static get(): FormGroup {
        return (new FormBuilder()).group({
            color: ['', [
                <any>Validators.required,
            ]],
            type: ['', [
                <any>Validators.required,
            ]],
        });
    }
}