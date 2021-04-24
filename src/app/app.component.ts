import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1> 
      Welcome to {{ title }}
    </h1>
    <app-list-container></app-list-container>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
}
