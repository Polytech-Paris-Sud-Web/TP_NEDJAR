import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../models/article.model';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Output() deletedArticle: EventEmitter<Article> = new EventEmitter();

  @Input()
  article: Article;
  // {title: string,  content: string, author: string};

  constructor() {
    // this.title = 'First Article';
    // this.content = 'Hello World !';
    // this.author = 'LYN';
  }
  ngOnInit(): void {
  }
  delete(): void {
    this.deletedArticle.emit(this.article);
  }
}
