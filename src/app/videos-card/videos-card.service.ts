import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// import { Http } from '@angular/http';
// import { Card } from './card/card.type';
// import 'rxjs/add/operator/map';
const cardsPromise = Promise.all(environment.VIDEOS_CARD_LIST_DATA);

export class VideoCard {
  constructor(public id: number, public link: string, public image: any) {}
}

@Injectable()
export class VideoCardService {
  constructor() {}

  getVideoCards() {
    return cardsPromise;
  }

  getVideoCard(id: number | string) {
    return cardsPromise.then((cards) => cards.filter((c) => c.id === +id)[0]);
  }
  // getCards() {
  //   return this.http
  //           .get(environment.BLOGGERS_CARD_DATA)
  //           .map((response: { json: () => any; }) => response.json());
  // }
}
