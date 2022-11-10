import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
// import { Http } from '@angular/http';
// import { Card } from './card/card.type';
// import 'rxjs/add/operator/map';
const cardsPromise = Promise.all(environment.BLOGGERS_CARD_DATA);

export class Card {
  constructor(public id: number, public link: string,
    public title: string,
    public youtube: string,
    public vk: string,
    public instagram: string,
    public key: string,) { }
    
}

@Injectable()
export class CardService {
  constructor() { }

  getCards() { return cardsPromise; }

  getCard(id: number | string) {
    return cardsPromise
      .then(cards => cards.filter(c => c.id === +id)[0]);
  }
  // getCards() {
  //   return this.http
  //           .get(environment.BLOGGERS_CARD_DATA)
  //           .map((response: { json: () => any; }) => response.json());
  // }
}
