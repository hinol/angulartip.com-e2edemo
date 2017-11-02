import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarColorComponent } from './components/color/color.component';
import { CarEngineComponent } from './components/engine/engine.component';
import {CarIndexComponent} from './components/index/index.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
      MatInputModule,
      MatButtonModule,
      ReactiveFormsModule,
      FormsModule,
      MatFormFieldModule

  ],
  declarations: [CarColorComponent, CarEngineComponent, CarIndexComponent],
  exports: [
    CarColorComponent, CarEngineComponent, CarIndexComponent
  ]
})
export class CarModule { }
