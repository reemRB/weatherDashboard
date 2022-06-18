import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardShellComponent } from './dashboard-shell.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

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
        path: 'ISO/:iso',
        component: WeatherDetailsComponent,
        outlet: 'weather',
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
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
