import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {


  @Input()
  public search: string = '';

  @Output()
  public searchChange = new EventEmitter<string>();

}
