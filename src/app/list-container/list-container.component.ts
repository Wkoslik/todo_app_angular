import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';


@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {
  todoList: TodoItem[];
  todoListService: TodoListService;
  searchTerm:string="";

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

  sortAlpha(): void{
    this.todoListService.sortAlpha()
  }

  sortChron(): void{
    this.todoListService.sortChron()
  }

}
