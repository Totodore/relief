import { Component, OnInit } from '@angular/core';
import { conseilTags } from '../../models/conseil-tags';
import { Input } from '@angular/core';
import { Conseil } from '../../models/conseil.model';
import { ConseilService } from '../../services/conseilList.service';

@Component({
  selector: 'app-all-conseils',
  templateUrl: './all-conseils.component.html',
  styleUrls: ['./all-conseils.component.css']
})
export class AllConseilsComponent implements OnInit {
  conseilTagsList: string[] = Object.values(conseilTags);
  conseils: Conseil[] = [];
  conseilService: ConseilService = new ConseilService();

  ngOnInit(): void {
    this.conseils = this.conseilService.getConseils();
  }

}
