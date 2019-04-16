import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../../filter/filter.action';
import * as fromTodo from '../../../business/todo/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  allowedFilters: fromFilter.allowedFilters[] = ['all', 'completed', 'pending'];
  currentFilter: fromFilter.allowedFilters;
  pendingTasks: number;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {

    this.store.subscribe( state => {

      this.currentFilter = state.filter;

      this.countPendingTasks( state.todos );

    });

  }

  countPendingTasks( todos: Todo[] ) {

    this.pendingTasks = todos.filter( todo => !todo.completed ).length;
  }

  changeFilter( newFilter: fromFilter.allowedFilters ) {

    const CHANGE_FILTER_ACTION = new fromFilter.SetFilterAction( newFilter );

    this.store.dispatch( CHANGE_FILTER_ACTION );

  }

  clearAllTodo() {
    const CLEAR_ALL_TODO_ACTION = new fromTodo.ClearAllTodoAction();
    this.store.dispatch( CLEAR_ALL_TODO_ACTION );
  }

}
