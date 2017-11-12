import { Component, OnInit } from '@angular/core';
import {CAR_ROUTE_SLASH} from '../../classes/routes';

@Component({
  selector: 'car-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class CarIndexComponent implements OnInit {


  public routes = CAR_ROUTE_SLASH;

  constructor() { }

  ngOnInit() {
  }

}
