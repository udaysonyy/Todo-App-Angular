import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() i : number;
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() strikeout: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  
  ngOnInit(): void {
  }
  
  onClick(todo: Todo){
    this.deleteTodo.emit(todo);
  }

  strike(todo: Todo){
    this.strikeout.emit(todo);
  }
}
