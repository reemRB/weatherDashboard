import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// @ts-ignore
import * as countriesData from '../../../assets/countries.json';
import { CountriesData } from '../models/countries.interface';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  countries : CountriesData[] = countriesData.default;

  form !: FormGroup
  
  country = new FormControl('LB',[Validators.required])

  constructor(fb: FormBuilder) {
    
    this.form = fb.group({
      
    })


  }

  ngOnInit(): void {
    console.log(this.countries)

  }

  searchCity(){

  }

}
