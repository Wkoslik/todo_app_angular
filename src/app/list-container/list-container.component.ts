import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-container',
  template: `
      <app-input-item (submit)="addItem($event)"></app-input-item>  
    <ul>
    <li *ngFor="let item of todoList">
      <app-todo-item [item]="item"></app-todo-item>
    </li>
  </ul>
  `,
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  addItem(toDo){
    this.todoList.push(toDo)
  }

}
