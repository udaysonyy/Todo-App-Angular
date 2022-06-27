import { compileClassMetadata } from '@angular/compiler';
import { NgForm } from '@angular/forms'
import { Output, Component, EventEmitter, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string
  desc: string

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    const todo = {
      title : this.title,
      desc : this.desc,
      active : true
    }

    this.todoAdd.emit(todo);
  }

  complete(add: NgForm){
    add.reset();
  }

}
function output() {
  throw new Error('Function not implemented.');
}

