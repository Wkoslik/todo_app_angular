import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> 
      Welcome to {{ title }}
    </h1>
    <app-input-item></app-input-item>  
    <ul>
      <li *ngFor="let item of todoList">
        <app-todo-item></app-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoList=[
    {
      title: 'install Nodejs',
      description: 'go to CLI and download node',
      dueDate: '2021-04-28',
      tags: ['node', 'coding', 'computer']
    },
    {
      title: 'install Angjuar',
      description: 'go to CLI and download angular',
      dueDate: '2021-04-28',
      tags: ['angular', 'coding']
    },
    {
      title: 'install React',
      description: 'go to CLI and download react globally',
      dueDate: '2021-04-28',
      tags: ['coding', 'react']
    },
  ];

}
