import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-buttons',
  templateUrl: './sort-buttons.component.html',
  styleUrls: ['./sort-buttons.component.css']
})
export class SortButtonsComponent implements OnInit {
  @Output() sortAlpha: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  sortAlphabetically(): void{
    console.log('sortalpha sort button component')
    this.sortAlpha.emit()
  }

}
