import { Component, OnInit } from '@angular/core';
import { Conseil } from '../../models/conseil.model';
import { conseilTags } from '../../models/conseil-tags';
import { Input } from '@angular/core';

@Component({
  selector: 'app-conseil-card',
  templateUrl: './conseil-card.component.html',
  styleUrls: ['./conseil-card.component.css']
})
export class ConseilCardComponent implements OnInit {
  @Input() conseil: Conseil = new Conseil();
  public name!: string;
  public description!: string;
  public tag!: conseilTags;

  constructor() {
  }

  ngOnInit(): void {
    this.name = this.conseil.title;
    this.description = this.conseil.description;
    this.tag = this.conseil.tag;
  }

}
