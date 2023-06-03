import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-forum-card',
  templateUrl: './forum-card.component.html',
  styleUrls: ['./forum-card.component.css']
})
export class ForumCardComponent implements OnInit {
  @Input() likes = 0;
  @Input() comments = 0;
  @Input() question = ''; 
  @Input() isCertified = false;
  @Input() tagList = [];

  constructor() { }

  ngOnInit(): void {
  }

}
