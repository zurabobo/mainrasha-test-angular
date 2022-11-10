import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  title:any;
  bloggersLocation = window.location.pathname === '/bloggers';
  constructor() {}

  ngOnInit() {
    this.title = this.bloggersLocation ? 'Блогеры' : 'Другие блогеры'
  }
}
