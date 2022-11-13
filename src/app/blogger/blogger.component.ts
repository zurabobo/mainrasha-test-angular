import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CardService, Card } from '../card.service';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css'],
})
export class BloggerComponent implements OnInit {
  card!: Card;

  constructor(
    private service: CardService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id']
      this.service.getCard(id).then((card) => (this.card = card));
    });

  }
}
