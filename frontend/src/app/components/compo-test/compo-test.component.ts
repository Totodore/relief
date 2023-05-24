import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from 'src/app/models/face-snap.model';

@Component({
  selector: 'app-compo-test',
  templateUrl: './compo-test.component.html',
  styleUrls: ['./compo-test.component.css']
})
export class CompoTestComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor() { }

  buttonText!: string;

  ngOnInit() {
    this.buttonText = "Oh snap !"
  }

  onAddSnap() {
    if (this.buttonText === "Oh snap !"){
      this.faceSnap.snaps++; 
      this.buttonText= "Oops, snapped !";
    } else {
      this.faceSnap.snaps--; 
      this.buttonText = "Oh snap !";
    }
  }
}
