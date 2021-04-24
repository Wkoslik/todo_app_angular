import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';


@Component({
  selector: 'app-list-container',
  template: `
      <app-input-item (submit)="addItem($event)"></app-input-item>  
    <ul>
    <li *ngFor="let item of todoList">
      <app-todo-item 
        [item]="item" 
        (remove)="removeItem($event)"
        (update)="updateItem($event.item, $event.change)"
        >
      </app-todo-item>
    </li>
  </ul>
  `,
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {
  todoList: TodoItem[];
  todoListService: TodoListService;


  constructor(todoListService: TodoListService) { 
    this.todoListService = todoListService
  }

  ngOnInit(): void{
    this.todoList = this.todoListService.getList()
  }

  addItem(toDo){
    this.todoListService.addItem(toDo)
  }

  removeItem(item): void{
    this.todoListService.deleteItem(item)
  }

  updateItem(item, change):void {
    this.todoListService.completeItem(item, change)
  }
}
