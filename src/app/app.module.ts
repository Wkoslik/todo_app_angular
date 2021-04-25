import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputItemComponent } from './input-item/input-item.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { TodoListService } from './services/todo-list.service';
import { SortButtonsComponent } from './sort-buttons/sort-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    InputItemComponent,
    TodoItemComponent,
    ListContainerComponent,
    SortButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
