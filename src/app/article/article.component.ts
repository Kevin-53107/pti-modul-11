import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model'; //panggil model yang telah kita buat
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass: 'row';
  @Input() article: Article;
  votes: number;
  title: string;
  link: string;

  constructor() {}

  ngOnInit(): void {}

  voteUp(): boolean {
    // untuk memanggil method voteUp pada model
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    // untuk memanggil method voteDown pada model
    this.article.voteUp();
    return false;
  }
}
