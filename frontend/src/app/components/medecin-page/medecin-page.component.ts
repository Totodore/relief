import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medecin-page',
  templateUrl: './medecin-page.component.html',
  styleUrls: ['./medecin-page.component.css']
})
export class MedecinPageComponent {

  public search: string = '';

  public readonly data = [
    {
      nom: "Docteur Jean",
    },
    {
      nom: "Docteur Paul",
    },
    {
      nom: "Docteur sudaka",
    },
    {
      nom: "Docteur Vigneron"
    },
    {
      nom: "Docteur Prévot"
    },
    {
      nom: "Docteur Lefebvre"
    },
    {
      nom: "Docteur Dupont"
    }
  ]

  public filteredData: typeof this.data = this.data;

  public onSearch() {
    this.filteredData = this.data.filter((item) => {
      if (this.search === '') {
        return true;
      }
      return item.nom.includes(this.search);
    });
  }
}
