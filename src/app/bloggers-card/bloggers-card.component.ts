// import { Component, OnInit, Input } from '@angular/core';
// import { BLOGGERS_CARD_DATA, BloggersCardData } from 'src/environments/environment';

// @Component({
//   selector: 'app-bloggers-card',
//   templateUrl: './bloggers-card.component.html',
//   styleUrls: ['./bloggers-card.component.css']
// })
// export class BloggersCardComponent implements OnInit {

//   cardData = BLOGGERS_CARD_DATA;
//   bloggersLocation = window.location.pathname === '/bloggers';
//   currentCardData: BloggersCardData | undefined;
//  public data: BloggersCardData[] = []
//   // @Input() data: [] | undefined;

//   constructor() {

//     // this.data = [];
//     // this.cardData = BLOGGERS_CARD_DATA;
//   }

//   ngOnInit(): void {
//   }
//   handleClick(hero: BloggersCardData) {
//     // this.selectedCard = data;
//     // const data = []

//     this.data.push(hero)

//     console.log(this.data)
//   }
// }

// import { Component, OnInit, Input, Output } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { Router } from '@angular/router';
// import { BloggersCardData } from 'src/environments/environment';

// @Component({
//   selector: 'app-bloggers-card',
//   templateUrl: './bloggers-card.component.html',
//   styleUrls: ['./bloggers-card.component.css']
// })
// export class BloggersCardComponent implements OnInit {

//   cardData = environment.BLOGGERS_CARD_DATA;
//   bloggersLocation = window.location.pathname === '/bloggers';
//   bloggerLocation = window.location.pathname === '/blogger';
//   currentCardData: BloggersCardData | undefined;
//   selectedCard: BloggersCardData[] = []
//   // selectedCard: Array<any>

//   constructor(private router: Router) {
//     // this.data = [];
//     // this.cardData = BLOGGERS_CARD_DATA;
//   }

//   ngOnInit(): void {
//   }
//   handleClick(data: any) {
//     this.router.navigate(['/blogger', data.id])
//     this.selectedCard.push(data)
//     // this.selectedCard = data;
//     // console.log(this.selectedCard)
//     // return this.selectedCard
//     // const data = []

//     // this.data.push(hero)

//     // console.log(this.data)
//   }
// }

import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { BloggersCardData } from 'src/environments/environment';
import { Card, CardService } from '../card.service';

@Component({
  selector: 'app-bloggers-card',
  templateUrl: './bloggers-card.component.html',
  styleUrls: ['./bloggers-card.component.css'],
})
export class BloggersCardComponent implements OnInit {
  bloggersLocation = window.location.pathname === '/bloggers';
  cards: Card[] = [];
  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: (this.widgetsContent.nativeElement.scrollLeft += 331),
      behavior: 'smooth',
    });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: (this.widgetsContent.nativeElement.scrollLeft -= 331),
      behavior: 'smooth',
    });
  }

  onWheel(event: WheelEvent): void {
    this.widgetsContent.nativeElement.scrollLeft += event.deltaY;
    event.preventDefault();
  }

  constructor(private router: Router, private service: CardService) {}

  ngOnInit(): void {
    this.service.getCards().then((cards) => (this.cards = cards));
  }

  handleClick(card: Card) {
    this.router.navigate(['/blogger', card.id]);
  }
}
