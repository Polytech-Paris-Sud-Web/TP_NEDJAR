import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../models/article.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  // readonly article =  {title: 'My First Article', content : 'Hello World', author: 'LYN'};
  /*readonly article = [
  {title: 'My First Article', content : 'Hello World', author: 'LYN'},
  {title: 'My First Article', content : 'this is a list', author: 'LYN'},
  {title: 'My third Article', content : 'of articles', author: 'LYN'}
];*/

  articles: Article[];
  constructor(private articleService: ArticleService) {
  }
  ngOnInit(): void {
    this.getArticles(); // this.articleService.getArticles().subscribe((articles) => {this.articles = articles;});
  }
  /*articles(): Article[] {
    return this.articleService.getArticles();
  }*/

  // tslint:disable-next-line:typedef
  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article.id).subscribe( () => {
      this.getArticles();
    });
  }
  // tslint:disable-next-line:typedef
  getArticles() {
    this.articleService.getArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }
}

