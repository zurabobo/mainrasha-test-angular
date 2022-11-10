import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements AfterViewInit {
  isMobile!: Observable<BreakpointState>;
  readonly breakpoint = this.breakpointObserver.observe([
    Breakpoints.Small,
    Breakpoints.Handset,
  ]);
  @ViewChild(MatSidenav) public sidenav!: MatSidenav;

  constructor(
    private sidenavService: SidenavService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
    this.breakpoint.subscribe(() => this.sidenav.close());
  }
}
