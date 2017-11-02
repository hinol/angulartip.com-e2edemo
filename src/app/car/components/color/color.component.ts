import {Component, OnInit} from '@angular/core';
import {ColorForm} from '../../forms/color.form';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'car-color',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.scss']
})
export class CarColorComponent implements OnInit {
    public form: FormGroup;

    constructor() {
    }

    ngOnInit() {
        this.form = ColorForm.get();
    }

}
