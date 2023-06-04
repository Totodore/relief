import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-forum-card',
  templateUrl: './forum-card.component.html',
  styleUrls: ['./forum-card.component.css']
})
export class ForumCardComponent {
  @Input() likes: number = 0;
  @Input() comments: number = 0;
  @Input() question: string = ''; 
  @Input() isCertified: boolean = false;
  @Input() tagList: string[] = [];

}
