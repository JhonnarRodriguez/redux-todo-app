import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromFilter from '../../../filter/filter.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filter: fromFilter.allowedFilters;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.subscribe( store => {
      this.todos = store.todos;
      this.filter = store.filter;
    });
  }

}
