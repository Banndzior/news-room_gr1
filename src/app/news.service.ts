import { Injectable, EventEmitter } from '@angular/core';
import { NewsData } from './news-data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public onChange = new EventEmitter();

  private news: NewsData[] = [
    new NewsData('123'),
    new NewsData('345'),
    new NewsData('sads')
  ];

  public getNewsList() : NewsData[] {
    return this.news.slice();
  }

  removeItem(i: number) {
    this.news.splice(i, 1);
    this.onChange.emit();
  }

  addItem(title: string) {
    this.news.push(new NewsData(title));
    this.onChange.emit();
  }
}
