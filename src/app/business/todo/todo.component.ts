import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToogleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completed: boolean = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
  }

  toogleAll() {

    this.completed = !this.completed;

    const TOOGLE_ALL_ACTION = new ToogleAllTodoAction( this.completed );

    this.store.dispatch( TOOGLE_ALL_ACTION );

  }

}
