import { Injectable } from "@angular/core";
import { map, Observable, of, pluck } from "rxjs";

// @ts-ignore
import * as countriesData from '../../../../assets/countries.json';
import { CityData, CountriesData, Weather } from "../../artifacts/models/countries.interface";

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  constructor() { }


  getCityInfo(iso:string, cityInput: string=''): Observable<CityData> {
    return of(countriesData.default).pipe(
      map(countries => countries.find((country:CountriesData)=> country.ISO === iso)),
      map(coutry=> coutry.cities.find((resp:CityData)=> resp.city === cityInput.toLowerCase()))
    )
  }

  getCountries(): Observable<CountriesData[]> {
    return of(countriesData.default);
  }
}