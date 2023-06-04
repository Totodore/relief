import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConseilService } from '../../services/conseilList.service';
import { Conseil } from '../../models/conseil.model';


@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.css']
})
export class ConseilsComponent implements OnInit {
  conseils: Conseil[] = [];
  conseilService: ConseilService = new ConseilService();

  ngOnInit(): void {
    this.conseils = this.conseilService.getConseils();
  }



}
