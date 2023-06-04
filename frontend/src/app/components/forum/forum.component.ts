import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {


  public search: string = '';

  public readonly data = [
    {
      question: "Qu\'est-ce que la vie ?",
      tagList: ['Philosophie'],
      comments: 123,
      likes: 21, 
      isCertified: true
    },
    {
      question: "Meilleure réaction en cas de boutons ?",
      comments: 34,
      likes: 76
    },
    {
      question: "Bébé malade ?",
      tagList: ['Enfance', 'Naissance'],
      comments: 343,
      likes: 243
    },
    {
      question: "Comment se maintenir en forme ?",
      tagList: ['Adultes'],
      comments: 12,
      likes: 4,
      isCertified: true
    },
  ];

  public filteredData: typeof this.data = this.data;

  constructor() { }

  ngOnInit(): void {
  }


  public onSearch() {
    this.filteredData = this.data.filter((item) => {
      if (this.search === '') {
        return true;
      }
      return item.question.includes(this.search);
    });
  }
}
