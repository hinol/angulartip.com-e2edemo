import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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