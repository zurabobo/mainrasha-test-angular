import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const cardsPromise = Promise.all(environment.videosApiUrl);

export class VideoCard {
  constructor(public id: number, public link: string, public image: string) {}
}

@Injectable()
export class VideoCardService {
  constructor() {}

  getVideoCards() {
    return cardsPromise;
  }

  getVideoCard(id: number | string) {
    return cardsPromise.then(cards => cards.filter((c) => c.id === +id)[0]);
  }
}
