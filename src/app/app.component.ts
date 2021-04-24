import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
    <h1> 
      Welcome to {{ title }}
    </h1>
    <app-input-item (submit)="addItem($event)"></app-input-item>  
    <ul>
      <li *ngFor="let item of todoList">
        <app-todo-item [item]="item"></app-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoList: TodoItem[]=[
    {
      title: 'install Nodejs',
      description: 'go to CLI and download node',
      dueDate: '2021-04-28',
      tags: ['node', 'coding', 'computer'],
      completed: false
    },
    {
      title: 'install Angular',
      description: 'go to CLI and download angular',
      dueDate: '2021-04-28',
      tags: ['angular', 'coding'],
      completed: false
    },
    {
      title: 'install React',
      description: 'go to CLI and download react globally',
      dueDate: '2021-04-28',
      tags: ['coding', 'react'],
      completed: false
    },
  ];

  addItem(toDo){
    this.todoList.push(toDo)
  }

}
