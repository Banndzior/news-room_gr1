import {
  Component, OnInit, EventEmitter, Output
} from '@angular/core';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {
  @Output()
  onAdd = new EventEmitter<string>();

  newTitle: string;

  ngOnInit() {
    this.newTitle = '123';
  }

  addNewItem() {
    if (this.newTitle) {
      this.onAdd.emit(this.newTitle);
      this.newTitle = '';
    }
  }
}
