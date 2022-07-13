import { Component, OnInit } from '@angular/core';
import { Task } from '../../Models/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  localItem: string | null;
  Todos:Task[];
  constructor() {
    this.localItem = localStorage.getItem("Todos");
    if(this.localItem == null){
      this.Todos = [];
    }else{
      this.Todos = JSON.parse(this.localItem)
    }
  }

  // idx : number = Todo.length;

  ngOnInit(): void {
  }

  todoDelete(todo: Task){
    const index = this.Todos.indexOf(todo);
    this.Todos.splice(index, 1)
    localStorage.setItem('Todos', JSON.stringify(this.Todos))
  }

  addTodo(todo: Task){
    // console.log(todo);
    this.Todos.push(todo);
    localStorage.setItem('Todos', JSON.stringify(this.Todos))
  }

  strikefont(todo: Task){
    const index = this.Todos.indexOf(todo);
    this.Todos[index].active = !this.Todos[index].active;
    if(!this.Todos[index].active){
      this.Todos.push(this.Todos.splice(index, 1)[0]);
    }
    localStorage.setItem('Todos', JSON.stringify(this.Todos))
  }
}
