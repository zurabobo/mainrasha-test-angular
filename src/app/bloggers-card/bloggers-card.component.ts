import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
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

  public onWheel(event: WheelEvent): void {
    this.widgetsContent.nativeElement.scrollLeft += event.deltaY;
    event.preventDefault();
  }

  constructor(private router: Router, private service: CardService) {}

  ngOnInit(): void {
    this.service.getCards().then((cards) => (this.cards = cards));
  }

  handleClick(card: Card) {
    this.router.navigate(['/blogger', card.id], { fragment: 'blogger' });
  }
}
