import { Component } from '@angular/core';
import { Article } from './article/article.model';// import juga model article yang telah dibangun
// isi from pada import merupakkan path karena article model ada di folder article maka
// kita harus masuk ke folder article dulu, baru ambil article.model ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-object-model';
  articles: Article[];

  constructor(){
    // kita deklarasi saja data awal pada constructor dengan membuat object article 
    this.articles = [ new Article(this.title: 'Angular 2', 
      link: 'https://angular.io',
      votes: 10),
    new Article(title: 'FullStack', link:'https://fullstack.io', votes:2),
    new Article(title: 'Angular Homepage', link:'https://angular.io', votes:1),

  ];
  }
  // untuk tambah article
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log('Adding article title: ${title.value} and link: ${link.value}');
    this.articles.push(new Article(title.value, link.value, votes:0));
    this.value = '';
    link.value ='';
    return false;
  }
  // untuk mensort article 
  sortedArticle(): Article[] {
    return this.articles.sort(compareFn:(a:Article, b:Article) => b.votes - a.votes );
  }
}
