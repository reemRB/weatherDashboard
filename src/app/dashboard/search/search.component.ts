import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, map, merge, Observable, pluck, startWith, switchMap, takeWhile, tap } from 'rxjs';

// @ts-ignore
import * as countriesData from '../../../assets/countries.json';
import { CountriesData } from '../models/countries.interface';
import { DashboardService } from '../services/dashboard.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {

  // countries: CountriesData[] = countriesData.default;

  readonly countries$ = this.service.getCountries()

  form !: FormGroup
  country = new FormControl('NL', [Validators.required])


  // userInput !: string
  cityInput !: boolean
  data$!: Observable<CountriesData[]>;



  constructor(fb: FormBuilder, private router: Router, private service: DashboardService) {
    this.form = fb.group({
      city: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.navigate(false)


    this.findCity().subscribe(resp => this.cityInput = resp);

  }


  findCity(): Observable<boolean> {
    return merge(
      this.country.valueChanges.pipe(startWith(this.country.value)),
      this.form.controls['city'].valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged())
    ).pipe(
      switchMap(_ => this.service.getCountryInfo(this.country.value, this.form.get('city')?.value)),
      map((resp) => !!resp),
      tap(resp => {
        this.navigate(resp)
      })
    )
  }


  navigate(resp: boolean) {
    if (resp){
      this.router.navigate(['./dashboard', { outlets: { display: ['city', this.form.get('city')?.value, this.country.value] } }]);
    }else {
      this.router.navigate(['./dashboard'])
    }
  }

  // findCity(): Observable<boolean>{
  //   return this.form.get('city')?.valueChanges.pipe(
  //     debounceTime(500),
  //     distinctUntilChanged(),
  //     map(input => this.userInput = input.toLowerCase()),

  //     map(_ => this.countries.find(count => count.ISO === this.country.value)),
  //     map(data => data?.cities.find(city => city.city === this.userInput)),
  //     map((user) => !!user),
  //     tap(resp => {
  //       if (resp)
  //         this.router.navigate(['./dashboard', { outlets: { display: ['city', this.userInput, this.country.value] } }],
  //         );
  //       else {
  //         this.router.navigate(['./dashboard'])
  //       }
  //     })
  //   )!
  // }
}
