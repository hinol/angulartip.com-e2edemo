import {Routes} from '@angular/router';
import {CarIndexComponent} from './car/components/index/index.component';
import {CarColorComponent} from './car/components/color/color.component';
import {CarEngineComponent} from './car/components/engine/engine.component';

export const appRoutes: Routes = [
  {
    path: '', component: CarIndexComponent, children: [
    {
      path: 'color',
      component: CarColorComponent,
    },
    {
      path: 'engine',
      component: CarEngineComponent,
    },
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '**', redirectTo: '/'} // 404
  ]
  }
];
