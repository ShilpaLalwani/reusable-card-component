import {Component, Input,Output, EventEmitter} from '@angular/core';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class CardComponent {
   @Input() title: string;
  @Input() subTitle: string;
  @Input() caption: string;
  @Input() avtar: string;
  @Input() image: string;

  @Output() likeNotify = new EventEmitter<boolean>();
  @Output() shareNotify = new EventEmitter<boolean>();
  @Output() commentNotify = new EventEmitter<boolean>();

  likeEvent() {
    this.likeNotify.emit(true);
  }
  shareEvent() {
    this.shareNotify.emit(true);
  }
  commentEvent() {
    this.commentNotify.emit(true);
  }
}
