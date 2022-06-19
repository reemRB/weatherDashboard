import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck, switchMap, tap } from 'rxjs';
import { CityData, Weather } from '../artifacts/models/countries.interface';
import { DashboardService } from '../artifacts/services/dashboard.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  weatherDetails$ !: Observable<Weather>;

  constructor( private activatedRoute: ActivatedRoute, private service: DashboardService) { }

  ngOnInit(): void {

    this.weatherDetails$ = this.activatedRoute.params.pipe(
      switchMap(resp=> this.service.getCityInfo(resp['iso'], resp['city'])),
      pluck('weather'),
      tap(resp=> this.service.getTemprature(resp.data[0].temprature))
      )
  }

}
