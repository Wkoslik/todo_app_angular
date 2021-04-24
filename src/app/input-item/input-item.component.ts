import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.css']
})
export class InputItemComponent implements OnInit {
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  title: string = '';
  description: string = '';
  dueDate: string;
  tags: string ='';
  completed: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  addToList(newTitle: string, newDesc: string, newDueDate: string, newTags: string): void {
    event.preventDefault();
    let tagArray = newTags.split(', ');
    let newTodo = {
      title: newTitle,
      description: newDesc,
      dueDate: newDueDate,
      tags: tagArray,
      completed: false
    }
    console.log(newTodo)
    this.submit.emit(newTodo)
  }
}
