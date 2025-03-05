import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  todoService = inject(TodosService);
  // Define a signal to store the todo items with empty array as initial value
  todoItems = signal<Array<Todo>>([]);

  // Allow to run function when the component is initialized
  ngOnInit(): void {
    console.log(this.todoService.todoItems)
    this.todoItems.set(this.todoService.todoItems);
  }
}
