import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div class="todo-container">
      <header>
        <h1> 
          {{title}}
        </h1>
      </header>

      <app-list-container></app-list-container>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
}
