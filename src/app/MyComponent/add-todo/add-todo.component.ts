// import { compileClassMetadata } from '@angular/compiler';
import { FormsModule, FormControl, ReactiveFormsModule, Validators, FormGroup, NgForm } from '@angular/forms'
import { Output, Component, EventEmitter, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/Task';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent{
  title: string;
  titletext = "Enter Task (Less than 30 characters)";

  @Output() todoAdd: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  onSubmit(){
    if(this.title.length != 0 && this.title.length < 30){
      const todo = {
        title : this.title,
        active : true
      }
      this.todoAdd.emit(todo);
    }
  }

  resetForm(add: NgForm){
    add.reset();
  }
}
