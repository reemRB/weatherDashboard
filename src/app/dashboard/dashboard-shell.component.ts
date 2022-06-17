import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-shell',
  template: `
   <router-outlet></router-outlet>
   <router-outlet name="display"></router-outlet>
  `,
  styles: [
  ]
})
export class DashboardShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
