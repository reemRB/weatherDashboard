import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, merge, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { DashboardService } from '../artifacts/services/dashboard.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


@UntilDestroy()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {

  readonly countries$ = this.service.getCountries()

  form !: FormGroup;

  country_control = new FormControl('NL', [Validators.required]);

  cityCheck !: boolean;

  searching = false

  constructor(fb: FormBuilder, private router: Router, private service: DashboardService) {
    this.form = fb.group({
      city: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.navigate(false);
    this.findCity().subscribe(_ => this.searching = false);
  }


  findCity(): Observable<boolean> {

    return merge(

      this.country_control.valueChanges.pipe(startWith(this.country_control.value)),
      this.form.controls['city'].valueChanges.pipe(
        tap(_ => this.searching = true),
        debounceTime(500),
        distinctUntilChanged())
    ).pipe(
      untilDestroyed(this),
      switchMap(_ => this.service.getCityInfo(this.country_control.value, this.form.get('city')?.value)),
      map((output) => !!output),
      tap(resp => {
        this.cityCheck = resp
        this.navigate(resp)
      }),
    );
  }


  navigate(output: boolean) {
    if (output) {
      this.router.navigate(['./dashboard', { outlets: { display: ['city', this.form.get('city')?.value, this.country_control.value] } }]);
    } else {
      this.router.navigate(['./dashboard']);
    }
  }
}
