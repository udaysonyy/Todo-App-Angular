import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Models/Task';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() i : number;
  @Input() todo: Task;
  @Output() deleteTodo: EventEmitter<Task> = new EventEmitter();
  @Output() strikeout: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  
  ngOnInit(): void {
  }
  
  onClick(todo: Task){
    this.deleteTodo.emit(todo);
  }

  strike(todo: Task){
    this.strikeout.emit(todo);
  }
}
