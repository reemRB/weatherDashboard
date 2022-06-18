import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, map, Observable, pluck, takeWhile, tap } from 'rxjs';

// @ts-ignore
import * as countriesData from '../../../assets/countries.json';
import {CountriesData } from '../models/countries.interface';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {
  
  countries : CountriesData[] = countriesData.default;

  form !: FormGroup
  country = new FormControl('NL',[Validators.required])

  
  userInput !: string
  cityInput !: boolean


  constructor(fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      city: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {

    this.form.get('city')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map(input=> this.userInput = input.toLowerCase()),
      map(_=> this.countries.find(count => count.ISO === this.country.value)),
      map(data=> data?.cities.find(city=> city.city === this.userInput)),
      map((user) => !!user),
      tap(_=>{
        this.router.navigate(['./dashboard',{outlets: {weather: ['ISO', this.country.value]}}]);
      })
    ).subscribe(resp=> this.cityInput = resp);

  }


}
