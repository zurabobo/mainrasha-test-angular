import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
const cardsPromise = Promise.all(environment.cardsApiUrl);

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
      .then(cards => cards.filter((c) => c.id === +id)[0]);
  }
}
