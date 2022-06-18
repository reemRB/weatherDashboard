import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../models/countries.interface';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  weatherDetails !: Weather;

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      
    )
    
    
    // subscribe(resp=>console.log(resp))

  }

}
