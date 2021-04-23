import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.css']
})
export class InputItemComponent implements OnInit {
  title: string = '';
  description: string = '';
  dueDate: string;
  tags: string ='';

  constructor() { }

  ngOnInit(): void {
  }

  createNewTodo(newTitle: string, newDesc: string, newDueDate: string, newTags: string): void {
    event.preventDefault();
    this.title = newTitle;
    this.description = newDesc;
    this.dueDate = newDueDate;
    this.tags = newTags;
    console.log(this.title, this.description, this.dueDate, this.tags)
  }
}
