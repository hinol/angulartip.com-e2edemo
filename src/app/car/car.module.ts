import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarColorComponent} from './components/color/color.component';
import {CarEngineComponent} from './components/engine/engine.component';
import {CarIndexComponent} from './components/index/index.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarService} from './services/car.service';
import {HttpClientModule} from '@angular/common/http';
import {FetchCarService} from './services/fetch-car.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatSelectModule,
        HttpClientModule,

    ],
    providers: [
        CarService,
        FetchCarService
    ],
    declarations: [CarColorComponent, CarEngineComponent, CarIndexComponent],
    exports: [
        CarColorComponent, CarEngineComponent, CarIndexComponent
    ]
})
export class CarModule {
}
