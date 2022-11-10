import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoCard, VideoCardService } from './videos-card.service';

@Component({
  selector: 'app-videos-card',
  templateUrl: './videos-card.component.html',
  styleUrls: ['./videos-card.component.css']
})
export class VideosCardComponent implements OnInit {

  
  bloggersLocation = window.location.pathname === '/bloggers';
  bloggerLocation = window.location.pathname === '/blogger/:id';
  // currentCardData: BloggersCardData | undefined;
  // selectedCard: BloggersCardData[] = []
  // selectedCard: Array<any>
  videoCards: VideoCard[] = [];
  constructor(
    private router: Router,
    private service: VideoCardService
  ) {
    // this.data = [];
    // this.cardData = BLOGGERS_CARD_DATA;
  }

  ngOnInit(): void {
    this.service.getVideoCards().then((cards) => (this.videoCards = cards));
  }

  handleClick(card: VideoCard) {
    this.router.navigate(['/blogger', card.id]);
  }

}
