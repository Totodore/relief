import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.css']
})
export class SubTitleComponent implements OnInit {
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
