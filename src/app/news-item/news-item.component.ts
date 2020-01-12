import {
  Component, OnInit, Input, EventEmitter, Output
} from '@angular/core';
import { NewsData } from '../news-data';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input()
  public title: string;

  @Output()
  public onRemove = new EventEmitter();

  imageUrl = 'https://d-pt.ppstatic.pl/k/r/1/76/c4/5d164a4f796d2_p.jpg?1574765877';

  ngOnInit() {
  }

  remove() {
    this.onRemove.emit();
  }
}
