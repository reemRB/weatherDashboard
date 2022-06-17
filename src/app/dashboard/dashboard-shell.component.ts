import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-shell',
  template: `
   <section class="p-8 h-full bg-sea flex items-center justify-center">
     <div>
       <router-outlet></router-outlet>
       <router-outlet name="display"></router-outlet>
     </div>
   </section>
  `,
  styles: [
    `
    `
  ]
})
export class DashboardShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
