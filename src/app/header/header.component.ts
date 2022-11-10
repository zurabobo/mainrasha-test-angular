// import { Component, OnInit } from '@angular/core';
// import {
//   Breakpoints,
//   BreakpointState,
//   BreakpointObserver,
// } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { SidenavService } from '../sidenav/sidenav.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css'],
// })
// export class HeaderComponent implements OnInit {
  
//   isMobile!: Observable<BreakpointState>;

//   constructor(
//     private breakpointObserver: BreakpointObserver,
//     private sidenav: SidenavService
//   ) {}
  
//   toggleSidenav() {
//     this.sidenav.toggle();
//   }

//   ngOnInit(): void {
//     this.isMobile = this.breakpointObserver.observe(Breakpoints.Handset);
//   }
// }

import { Component, OnInit } from '@angular/core';
import {
  Breakpoints,
  BreakpointState,
  BreakpointObserver,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  
  isMobile!: Observable<BreakpointState>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sidenav: SidenavService
  ) {}
  
  toggleSidenav() {
    this.sidenav.toggle();
  }

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Handset]);
  }
}
