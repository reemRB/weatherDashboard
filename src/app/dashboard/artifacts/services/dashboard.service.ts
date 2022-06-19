import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, of, Subject } from "rxjs";

// @ts-ignore
import * as countriesData from '../../../../assets/countries.json';
import { CityData, CountriesData } from "../../artifacts/models/countries.interface";

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
 
  private temprature = new BehaviorSubject<number>(50);
  temprature$ = this.temprature.asObservable();


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


  getTemprature(temp: number) {
    this.temprature.next(temp)
  }
}