import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardShellComponent } from './dashboard-shell.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardShellComponent,
    children:[
      {
        path: '',
        component: SearchComponent,
      },
      {
        path: 'city/:city',
        component: WeatherDetailsComponent,
        outlet: 'display',
      },
    ]
  }
]

@NgModule({
  declarations: [
    DashboardShellComponent,
    SearchComponent,
    WeatherDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
