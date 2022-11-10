import { Component, OnInit } from '@angular/core';
import {  MenuProperty } from '../../environments/environment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {

  menuProperties: MenuProperty[] = [];

  constructor() {
    this.menuProperties = environment.menuProperties;
  }

  ngOnInit(): void {}
}
