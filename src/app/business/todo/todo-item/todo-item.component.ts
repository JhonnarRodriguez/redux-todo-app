import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToogleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputTaskField') txtInputTaskField: ElementRef;

  // tslint:disable-next-line: no-inferrable-types
  editing: boolean = false;

  chkField: FormControl;
  inputTaskField: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completed);
    this.inputTaskField = new FormControl(this.todo.text, Validators.required);

    this.chkField.valueChanges.subscribe((value: boolean) => {
      const TOOGLE_TODO_ACTION = new ToogleTodoAction(this.todo.id);
      this.store.dispatch(TOOGLE_TODO_ACTION);
    });

  }

  editTask(): void {
    this.editing = true;
    setTimeout(() => {
      this.txtInputTaskField.nativeElement.select();
    }, 100);
  }

  finishEdition(): void {

    this.editing = false;

    if (this.inputTaskField.invalid || this.todo.text === this.inputTaskField.value) {

      return;
    }

    const EDIT_ACTION = new EditTodoAction(this.todo.id, this.inputTaskField.value);
    this.store.dispatch(EDIT_ACTION);
  }

  deleteTodo() {

    const DELETE_TODO_ACTION = new DeleteTodoAction( this.todo.id );

    this.store.dispatch( DELETE_TODO_ACTION );
  }

}
