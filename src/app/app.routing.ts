import {Routes} from '@angular/router';
import {CarIndexComponent} from './car/components/index/index.component';
import {CarColorComponent} from './car/components/color/color.component';
import {CarEngineComponent} from './car/components/engine/engine.component';
import {CAR_ROUTE} from './car/classes/routes';

export const appRoutes: Routes = [
  {
    path: '', component: CarIndexComponent, children: [
    {
      path: CAR_ROUTE.COLOR,
      component: CarColorComponent,
    },
    {
      path: CAR_ROUTE.ENGINE,
      component: CarEngineComponent,
    },
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '**', redirectTo: '/'} // 404
  ]
  }
];
