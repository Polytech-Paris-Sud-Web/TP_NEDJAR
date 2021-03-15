import { Injectable } from '@angular/core';
import {Article, FormArticle} from './models/article.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }
  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }
  /*public getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>('http://localhost:3000/articles/${id}');
  }*/
  public deleteArticle(id: number): Observable<Article[]> {
    return  this.http.delete<Article[]>('http://localhost:3000/articles/' + id);
  }
  public postArticle(article: FormArticle): Observable<Article> {
    return this.http.post<Article>('http://localhost:3000/articles', article);
  }
  /*public getArticles(): Article[] {
    return [{
      title: 'My First Article',
      content: 'Hello World',
      author: 'LYN'
    }, {
      title: 'My First Article',
      content: 'Hello World',
      author: 'LYN'
    }, {
      title: 'My First Article',
      content: 'Hello World',
      author: 'LYN'
    }];
  }*/
}
