import { forwardRef } from '@angular/core';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterTestingModule } from '@angular/router/testing';
import { async, of } from 'rxjs';
import { SearchComponent } from './search.component';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        MatSelectModule

      ],
      declarations: [SearchComponent],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('assign default value of country to NL', () => {
    expect(component.country.value).toEqual('NL');
  });

  it('should return a boolean', async () => {
    const el = fixture.nativeElement.querySelector('input');

    el.value = 'utrecht';
    el.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(component.cityInput).toEqual(true);
    });
  });

});
