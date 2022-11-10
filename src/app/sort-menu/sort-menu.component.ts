import { Component, OnInit } from '@angular/core';
import {
  PlatformProperty,
  DirectionProperty,
} from 'src/environments/environment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sort-menu',
  templateUrl: './sort-menu.component.html',
  styleUrls: ['./sort-menu.component.css'],
})
export class SortMenuComponent implements OnInit {
  platformProperties: PlatformProperty[] = [];
  directionProperties: DirectionProperty[] = [];

  constructor() {
    this.platformProperties = environment.platformProperties;
    this.directionProperties = environment.directionProperties;
  }
  ngOnInit(): void {}
}
