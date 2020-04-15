import {Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
})
export class CardComponent {
   @Input() title: string;
  @Input() subTitle: string;
  @Input() caption: string;
  @Input() avtar: string;
  @Input() image: string;

  @Output() likeNotify = new EventEmitter<boolean>();
  @Output() shareNotify = new EventEmitter<boolean>();
  @Output() learnMoreNotify = new EventEmitter<boolean>();

  likeEvent() {
    this.likeNotify.emit(true);
  }
  shareEvent() {
    this.shareNotify.emit(true);
  }
  learnMoreEvent() {
    this.learnMoreNotify.emit(true);
  }
}
