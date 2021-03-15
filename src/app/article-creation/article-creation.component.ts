import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ArticleService} from '../article.service';
import {Article} from '../models/article.model';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.scss']
})
export class ArticleCreationComponent implements OnInit {
  articleForm: FormGroup;
  @Output() newArticle: EventEmitter<Article> = new EventEmitter();
  constructor(private fb: FormBuilder, private articleService: ArticleService ) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required ],
      content : ['', Validators.required ],
      author : ['', Validators.required ],
    });
  }
  ngOnInit(): void {
  }
// tslint:disable-next-line:typedef
  createArticle() {
    const { title, content, author } = this.articleForm.value;
    const newArticle = {
      title,
      content,
      author
    };
    this.articleService.postArticle(newArticle).subscribe();
    window.location.reload();
  }
}
