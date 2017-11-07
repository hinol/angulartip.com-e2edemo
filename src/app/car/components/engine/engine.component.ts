import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
    selector: 'car-engine',
    templateUrl: './engine.component.html',
    styleUrls: ['./engine.component.scss']
})
export class CarEngineComponent {

    value: number;

    constructor() {
    }

    setValue(v: number): any {
        Observable.timer(2000).subscribe(() => {
            this.value = v;
        })
    }

}
