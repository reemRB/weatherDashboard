import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DashboardService } from './artifacts/services/dashboard.service';

@Component({
  selector: 'app-dashboard-shell',
  template: `

    <section class="h-full p-8 flex items-center justify-center overflow-auto" [ngStyle]="temprature? backgroundStyle : defaultBackground">
      
      <div>
        <router-outlet></router-outlet>
        <router-outlet name="display"></router-outlet>
      </div>
      
    </section>

  `,
  styles: [
    `
    .changeColor{
      background: linear-gradient(130.54deg, #102F7E 0%, #0C8DD6 0%, #1AA0EC 0%, #60C6FF 0%, #9BDBFF -33.02%, #B4DEDA 52.01%, #FFD66B 137.04%, #FFC178 0%, #FE9255 0%)
    }

    /* section{
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), 
        linear-gradient(130.54deg, 
          #102F7E -11.47%, #0C8DD6 3.95%, #1AA0EC 19.37%, #60C6FF 34.78%, #9BDBFF 50.19%, #B4DEDA 65.61%, 
          #FFD66B 81.02%, #FFC178 96.44%, 
          #FE9255 111.85%);
    } */
    `
  ]
})

export class DashboardShellComponent implements OnInit, AfterViewChecked {

  temprature!: number


  constructor(private service: DashboardService, private cdRef:ChangeDetectorRef) {}
  
  
  ngAfterViewChecked(): void {
    this.service.temprature$.pipe(
      map(resp => this.temprature = resp),
    ).subscribe(resp=> console.log(resp));
    this.cdRef.detectChanges();
  }


  ngOnInit(): void {

  }

  get backgroundStyle() {
    return {
      background: `linear-gradient(
        130.54deg,
        #102F7E ${-11.47+this.temprature+1.47-40}%,
        #0C8DD6 ${3.95+this.temprature-13.93-30}%,
        #1AA0EC ${19.37+this.temprature-29.73-20}%,
        #60C6FF ${34.78+this.temprature-44.78-10}%,
        #9BDBFF ${50.19+this.temprature-93.21}%,
        #B4DEDA ${65.61+this.temprature-23.6+10}%,
        #FFD66B ${81.02+this.temprature+46.02+20}%,
        #FFC178 ${96.44+this.temprature-106.44+30}%,
        #FE9255 ${111.85+this.temprature-121.85+40}%
      )`,
    };
  }

  get defaultBackground() {
    return {
      background: `linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), 
      linear-gradient(130.54deg, 
        #102F7E -11.47%, #0C8DD6 3.95%, #1AA0EC 19.37%, #60C6FF 34.78%, #9BDBFF 50.19%, #B4DEDA 65.61%, 
        #FFD66B 81.02%, #FFC178 96.44%, 
        #FE9255 111.85%)`,
    };
  }

}
