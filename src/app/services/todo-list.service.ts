import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private todoList: TodoItem[]=[
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

  getList(): TodoItem[]{
    return this.todoList
  }
}
