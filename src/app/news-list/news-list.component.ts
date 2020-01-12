import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: string[];

  ngOnInit() {
    this.news = [
      '123',
      '345',
      'sads'
    ];
  }

  removeItem(i: number) {
    this.news.splice(i, 1);
  }

  addItem(title: string) {
    this.news.push(title);
  }
}
