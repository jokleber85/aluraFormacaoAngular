import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output,  } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss'],
})

export class LikeWidgetComponent implements OnInit {
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id: string = null;
  public fonts  = { faThumbsUp };

  constructor(private uniqueIdService: UniqueIdService){}

  public ngOnInit(): void {
    this.id = this.uniqueIdService.generateUniqueIdWidthPrefix('like-widget');
  }

  public like(): void{
    this.liked.emit();
  }
}
