import {Component, OnInit} from '@angular/core';
import {ColorForm, ColorOption, TypeOption} from '../../forms/color.form';
import {FormGroup} from '@angular/forms';
import {CarService} from '../../services/car.service';

@Component({
    selector: 'car-color',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.scss']
})
export class CarColorComponent implements OnInit {
    form: FormGroup;
    submitted = false;
    colors = ColorOption;
    types = TypeOption;
    count: number;

    constructor(private carService: CarService) {
    }

    ngOnInit() {
        this.form = ColorForm.get();
        this.count = this.carService.calculate({color: null, type: null}) + 10;
    }

    save(data: any, valid: boolean) {
        this.submitted = true;
        if (valid) {
            this.count = this.carService.calculate(data)+10;
        }
    }
}
