import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service'

const storageKey = 'todo-list'

const defaultList = [
  {
    title: 'Delete this',
    description: 'This is a holding list until you put your own information in!',
    dueDate: '2021-04-28',
    tags: [' node', ' coding', ' computer'],
    completed: false
  }
]


@Injectable()
export class TodoListService {
  todoList: TodoItem[]

  constructor(private storage: StorageService) {
    this.todoList = storage.getData(storageKey) || defaultList
  }

  saveList(): void {
    this.storage.setData(storageKey, this.todoList)
  }

  addItem(item: TodoItem): void {
    this.todoList.push(item)
    this.saveList();
  }

  completeItem(item, change): void {
    let index = this.todoList.indexOf(item)
    this.todoList[index] = { ...item, ...change }
    this.saveList()
  }

  deleteItem(item): void {
    let index = this.todoList.indexOf(item)
    this.todoList.splice(index, 1)
    this.saveList()
  }

  sortAlpha(): void {
    this.todoList.sort((a, b) => {
      return a.title.localeCompare(b.title)
    })
    this.saveList();
  }

  sortChron(): void {
    this.todoList.sort((a, b) => {
      return a.dueDate.localeCompare(b.dueDate)
    })
    this.saveList();
  }

  getList(): TodoItem[] {
    return this.todoList
  }

}
