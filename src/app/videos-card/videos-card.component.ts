import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoCard, VideoCardService } from './videos-card.service';

@Component({
  selector: 'app-videos-card',
  templateUrl: './videos-card.component.html',
  styleUrls: ['./videos-card.component.css'],
})
export class VideosCardComponent implements OnInit {
  videoCards: VideoCard[] = [];
  constructor(private router: Router, private service: VideoCardService) {}

  ngOnInit(): void {
    this.service.getVideoCards().then((cards) => (this.videoCards = cards));
  }

  handleClick(card: VideoCard) {
    this.router.navigate(['/blogger', card.id]);
  }
}
