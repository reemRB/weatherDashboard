import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CityData, CountriesData } from '../artifacts/models/countries.interface';
import { DashboardService } from '../artifacts/services/dashboard.service';
import { DashboardShellComponent } from '../dashboard-shell.component';
import { SearchComponent } from './search.component';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports: [
        ReactiveFormsModule,
        MatSelectModule,
        RouterTestingModule.withRoutes([
          {
            path: 'dashboard',
            component: DashboardShellComponent,
          }
        ]),
      ],

      declarations: [SearchComponent],

    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return all the countries data', inject([DashboardService], (countryData:any) => {
    countryData.getCountries().subscribe((result:CountriesData[]) => expect(result.length).toBeGreaterThan(0)); 
  }));


  it('should return the weather info of a specific city', inject([DashboardService], (countryData:any) => {
    countryData.getCityInfo('NL','utrecht').subscribe((result:CityData) => expect(result).toBeTruthy()); 
  }));

  it('assign default value of country to NL', () => {
    expect(component.country_control.value).toEqual('NL');
  });

  it('should navigate to search on initialization', () => {
    const route: Router = TestBed.inject(Router);
    spyOn(route, 'navigate');
    component.navigate(false);
    expect(route.navigate).toHaveBeenCalledWith(['./dashboard']);
  });

  it('should navigate to weather info after search', async () => {
    const city = fixture.nativeElement.querySelector('input');
    city.value = 'utrecht';
    city.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    
    await fixture.whenStable().then(() => {
      const route: Router = TestBed.inject(Router);
      spyOn(route, 'navigate');
      component.navigate(true);
      expect(route.navigate).toHaveBeenCalledWith(['./dashboard', { outlets: { display: ['city', city.value, 'NL'] } }]);
    });
  });

  it('should return a boolean', async () => {
    const city = fixture.nativeElement.querySelector('input');

    city.value = 'amsterdam';
    city.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    
    await fixture.whenStable().then(() => {
      expect(component.cityCheck).toEqual(true);
    });
  });

});
