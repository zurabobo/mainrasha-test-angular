import { Component, OnInit } from '@angular/core';
import { RouteProperty } from '../../environments/environment';
import { environment } from 'src/environments/environment';;

@Component({
  selector: 'app-route-bar',
  templateUrl: './route-bar.component.html',
  styleUrls: ['./route-bar.component.css'],
})
export class RouteBarComponent implements OnInit {
  routeProperties: RouteProperty[] = [];

  constructor() {
    this.routeProperties = environment.routeProperties;
  }

  ngOnInit(): void {}
}
