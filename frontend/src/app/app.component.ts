import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'relief-frontend';
  mySnap!: FaceSnap;
  mySnap2!: FaceSnap; 
  mySnap3!: FaceSnap;

  ngOnInit(){
    this.mySnap = {
      title: 'Archibald',
      description : 'Mon meilleur ami',
      imageURL : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0
    }

    this.mySnap2 = {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0
    }

    this.mySnap3 = {
      title: 'Un bon repas',
      description: 'Mon meilleur ami',
      imageURL: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0, 
      location: 'Paris'
    }
  }


}
